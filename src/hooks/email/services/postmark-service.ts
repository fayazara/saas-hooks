import { ofetch as $fetch } from "ofetch";
import type { EmailOptions } from "../types/email-options";
import type { EmailService } from "../types/email-service";

/**
 * Email service implementation for Postmark
 */
export class PostmarkService implements EmailService {
  private POSTMARK_SERVER_TOKEN = process.env.POSTMARK_SERVER_TOKEN;
  private POSTMARK_API_URL = "https://api.postmarkapp.com/email";

  async send(emailOptions: EmailOptions): Promise<void> {
    if (!this.POSTMARK_SERVER_TOKEN) {
      throw new Error("Postmark server token is missing");
    }

    const { to, from, subject, text, html } = emailOptions;
    if (!to || !from || (!text && !html)) {
      throw new Error("Required email fields are missing");
    }

    const payload = {
      From: from,
      To: Array.isArray(to) ? to.join(",") : to,
      Subject: subject,
      TextBody: text,
      HtmlBody: html,
      MessageStream: "outbound",
    };

    try {
      await $fetch(this.POSTMARK_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": this.POSTMARK_SERVER_TOKEN,
        },
        body: JSON.stringify(payload),
      });
      console.log("Email sent via Postmark");
    } catch (error) {
      console.error("Failed to send email with Postmark:", error);
      throw new Error("Email sending failed with Postmark");
    }
  }
}
