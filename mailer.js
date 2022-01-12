import nodemailer from "nodemailer";
import { emailInfo } from "./config.js";

export const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: emailInfo.email_address,
    pass: emailInfo.email_password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
