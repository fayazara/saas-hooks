/**
 * Email options required for sending an email
 */
export type EmailOptions = {
  from: string;
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
};

/**
 * Supported email providers
 */
export type EmailProvider = "resend" | "plunk" | "sendgrid" | "postmark";
