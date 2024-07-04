import { PlunkService } from "./services/plunk-service";
import { PostmarkService } from "./services/postmark-service";
import { ResendEmailService } from "./services/resend-service";
import { SendGridService } from "./services/sendgrid-service";
import type { EmailProvider } from "./types/email-options";
import type { EmailService } from "./types/email-service";

/**
 * Factory function to get the email service based on the provider
 * @param provider - The email provider
 * @returns The email service instance
 * @throws Error if the provider is not supported
 */
export function useEmail(provider: EmailProvider): EmailService {
  switch (provider) {
    case "resend": {
      return new ResendEmailService();
    }
    case "plunk": {
      return new PlunkService();
    }
    case "sendgrid": {
      return new SendGridService();
    }
    case "postmark": {
      return new PostmarkService();
    }
    default: {
      throw new Error(`Unsupported email provider: ${provider}`);
    }
  }
}
