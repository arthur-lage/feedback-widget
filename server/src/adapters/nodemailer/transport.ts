import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7ee8aa93ed8454",
    pass: "16eb3106632fe8",
  },
});
