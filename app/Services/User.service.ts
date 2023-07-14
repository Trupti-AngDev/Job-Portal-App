import { compare } from "bcrypt";
import { UserModel } from "../Models/User/User.model";
import Encryption from "../utilities/Encryption";
import MailService from "../utilities/mail.service";

const userLogin = async (data: any) => {
  try {
    let result = await new UserModel().getUser(data);
    if (result.length === 0) throw new Error("Invalid email or password");
    const match = await new Encryption().verifypassword(
      data.password,
      result[0].password
    );
    if (!match) throw new Error("Invalid password");
    delete result[0].password;
    if (result[0].status !== 1) throw new Error("Your account is not active");
    let role;
    switch (result[0].role_id) {
      case 1:
        result[0].role = "admin";
        break;
      case 2:
        result[0].role = "JobProvider";
        break;
      case 3:
        result[0].role = "JobSeeker";
        break;
    }
    delete result[0].role_id;
    return {
      token: await Encryption.generateJwtToken({ id: result[0].id }),
      user: result,
    };
  } catch (error: any) {
    console.log("error:", error.message);
    return error;
  }
};
const createUser = async (data: any) => {
  try {
    let tableName;
    switch (data.role) {
      case "jobProvider":
        tableName = "user";
        break;
      case "admin":
        tableName = "user";
        break;
      case "jobSeeker":
        tableName = "user";
        break;
      default:
        return { error: "Invalid role" };
    }
    // console.log("in service-------------->", data.role);
    const role_id = await new UserModel().getUserRole(data.role);
    // console.log("in service-------------->", role_id);
    if (data.password !== data.confirm_password)
      throw new Error("password did not match");
    let hash = await new Encryption().generateHash(data.password, 10);
    data.password = hash;
    delete data.confirm_password;
    delete data.role;
    data.role_id = role_id[0].id;
    // console.log("in service------------->", data);
    let user = await new UserModel().createUser(data, tableName);
    return user;
  } catch (error: any) {
    throw error;
  }
};
const UserAccessManager = async (data: any) => {
  try {
    const existingUser = await new UserModel().getUserByGoogleId(data.googleId);
    if (existingUser.length !== 0) {
      console.log("Existing Google User", existingUser[0]);
      delete existingUser[0].password;
      delete existingUser[0].googleId;
      return {
        token: await Encryption.generateJwtToken({ id: existingUser[0].id }),
        user: existingUser[0],
      };
    }
    const newUser = await new UserModel().createUserByGoogleAuth(data);
    const user = await new UserModel().getUserById(newUser.insertId);
    console.log("New Google User", user[0]);
    if (user.length !== 0) {
      delete user[0].password;
      delete user[0].googleId;
      return {
        token: await Encryption.generateJwtToken({ id: user[0].id }),
        user: user[0],
      };
    }
    return { message: "Something Went Wrong", suc: false };
  } catch (error: any) {
    console.log("Error google auth:", error.message);
    return error;
  }
};

const initiateResetPasswordService = async (data: any) => {
  try {
    const valid = await new UserModel().getUser(data);
    if (valid.length === 0) throw new Error("No user found");
    const token: string = await Encryption.generateRandomToken();
    const expire_time = new Date(Date.now() + 3600000);
    const result = await new UserModel().modifyToken(
      token,
      expire_time,
      valid[0].id
    );
    if (result.affectedRows === 0) {
      return { error: "Something Went wrong" };
    }
    const resetLink: string = `http://localhost:3000/user/request-reset?token=${token}`;
    data.subject = "Reset Your Password";
    data.text = `Click the following link to reset your password: ${resetLink}`;
    return await new MailService().sendEmail(data);
  } catch (error: any) {
    console.log("Error initiate reset password:", error.message);
    return error;
  }
};
const validateResetRequestService = async (token: any) => {
  try {
    const user = await new UserModel().getUserBytoken(token);
    if (!user) throw new Error("Something Went Wrong");
    if (user.length === 0 || user[0].expire_time < new Date()) {
      return { error: "Invalid or expired token" };
    }
    return { message: "Please provide a new password", reset_token: token };
  } catch (error: any) {
    console.log("Error validate reset request:", error.message);
    return error;
  }
};
const updatePasswordService = async (token: any, updatedData: any) => {
  try {
    const user = await new UserModel().getUserBytoken(token);
    if (!user) throw new Error("Something Went Wrong");
    if (user.length === 0 || user[0].expire_time < new Date()) {
      return { error: "Invalid or expired token" };
    }
    const { password, confirm_password } = updatedData;
    const compare = await Encryption.confirmPassword(
      password,
      confirm_password
    );
    if (!compare) return { error: "Password did not match" };
    delete updatedData.confirm_password;
    const hashPassword = await new Encryption().generateHash(password, 10);
    const result = await new UserModel().modifySingleField(
      user[0].id,
      "password",
      hashPassword
    );
    if (!result) throw new Error("Something Went Wrong");
    if (result.affectedRows === 0) {
      return { error: "Unable to update the password , Please try again" };
    }
    await new UserModel().tokenDropOut(user[0].id);
    return result;
  } catch (error: any) {
    console.log("Error update password:", error.message);
    return error;
  }
};
export default {
  userLogin,
  createUser,
  UserAccessManager,
  initiateResetPasswordService,
  validateResetRequestService,
  updatePasswordService,
};
