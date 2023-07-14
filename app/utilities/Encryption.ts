const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import * as crypto from "crypto";
const config = require("../config");
export default class Encryption {
  constructor() {}

  public static async generateJwtToken(data: any) {
    return await jwt.sign(data, config.JwtToken.secretKey, {
      expiresIn: config.JwtToken.expiry,
    });
  }

  public async verifyJwtToken(token: string | string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        config.JwtToken.secretKey,
        (err: Error, decoded: any) => {
          if (err) {
            resolve(null);
          } else {
            resolve(decoded);
          }
        }
      );
    });
  }

  public async generateHash(
    password: string,
    saltRounds: number
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err: any, hash: string) => {
        if (!err) {
          resolve(hash);
        }
        reject(err);
      });
    });
  }

  public async verifypassword(
    password: string,
    hashPassword: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hashPassword, (err: any, hash: string) => {
        if (!err) {
          resolve(hash);
        }
        reject(err);
      });
    });
  }

  public static async generateRandomToken() {
    const token = crypto.randomBytes(32).toString("hex");
    return token;
  }

  public static async confirmPassword(
    password: string,
    confirm_password: string
  ) {
    if (password !== confirm_password) {
      return false;
    }
    return true;
  }
}
