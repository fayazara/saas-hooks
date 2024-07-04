import { ofetch as $fetch } from "ofetch";
import type { EmailOptions } from "../types/email-options";
import type { EmailService } from "../types/email-service";

/**
 * Email service implementation for Plunk
 */
export class PlunkService implements EmailService {
  private PLUNK_API_TOKEN = process.env.PLUNK_API_TOKEN;
  private PLUNK_API_URL = "https://api.useplunk.com/v1/send";

  async send(emailOptions: EmailOptions): Promise<void> {
    if (!this.PLUNK_API_TOKEN) {
      throw new Error("Plunk token is missing");
    }

    const { to, from, subject, text, html } = emailOptions;
    if (!to || !from || (!text && !html)) {
      throw new Error("Required email fields are missing");
    }

    const payload = {
      from,
      to,
      subject,
      body: html || text,
    };

    try {
      await $fetch(this.PLUNK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.PLUNK_API_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });
      console.log("Email sent via Plunk");
    } catch (error) {
      console.error("Failed to send email with Plunk:", error);
      throw new Error("Email sending failed with Plunk");
    }
  }
}
