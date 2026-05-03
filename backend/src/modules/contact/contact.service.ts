import type { ContactPayload } from "./contact.validation.js";

export function queueContactMessage(payload: ContactPayload) {
  return {
    accepted: true,
    payload
  };
}
