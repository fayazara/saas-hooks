import type { EmailOptions } from "./email-options";

/**
 * Interface defining the contract for email services
 */
export interface EmailService {
  send(emailOptions: EmailOptions): Promise<void>;
}
