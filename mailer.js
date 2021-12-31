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

// export const mailOptions = {
//   from: emailInfo.email_address,
//   to: "valerio_cipolla@hotmail.it",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
