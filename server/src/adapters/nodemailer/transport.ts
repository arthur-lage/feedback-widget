import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "12395fdbedad79",
    pass: "60e7871cee288d"
  }
});