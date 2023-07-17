import dotenv from "dotenv";
dotenv.config();
import nodemailer, { Transporter } from "nodemailer";
class MailService {
  private transporter: Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      //@ts-ignore
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  public async sendEmail(recipient: any) {
    const { email, subject, text } = recipient;
    try {
      await this.transporter.sendMail({
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        text: text,
      });
      return {
        message: "Check Your Gmail Account",
      };
    } catch (error: any) {
      console.error("Error occurred while sending email:", error);
      return { error: error };
    }
  }
}

export default MailService;
