import nodemailer from "nodemailer";
import { emailInfo } from "./config.js";

export const transporter = nodemailer.createTransport({
  host: `smtp-mail.outlook.com`,
  auth: {
    user: emailInfo.email_address,
    pass: emailInfo.email_password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
