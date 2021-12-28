import nodemailer from "nodemailer";
import { emailInfo } from "./config.js";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export function sendEmail(email, content) {
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", //
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: emailInfo.email_address,
      pass: emailInfo.email_password,
    },
  });

  let mailOptions = {
    from: `"My quote collection" <${emailInfo.email_address}>`,
    to: `${email}`,
    subject: `The quote you requested`,
    text: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: " + info.response);
  });
}

sendEmail("valerio_cipolla@hotmail.it", "ciao");
