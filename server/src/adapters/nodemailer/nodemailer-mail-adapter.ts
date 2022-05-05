import { MailAdapter, SendMailData } from "../mail-adapter";
import { transport } from "./transport";

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <feedbacks@feedget.com>",
      to: "Arthur Lages <arthurlage2006@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
