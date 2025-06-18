import { getHeaderValue } from "./utils";

const defaultFields = ["from", "to", "subject", "snippet", "date"];

export const gmailPickFields = (message: any, fields?: string[]) => {
    // console.log("message is", message)
  const selectedFields = fields && fields.length > 0 ? fields : defaultFields;

  const headers = message.payload?.headers || [];
  const headerMap = (name: string) => getHeaderValue(headers, name);

  const result: Record<string, any> = {};

  if (selectedFields.includes("from")) {
    result.from = headerMap("From") || message.sender;
  }
  if (selectedFields.includes("to")) {
    result.to = headerMap("To") || message.to;
  }
  if (selectedFields.includes("subject")) {
    result.subject = headerMap("Subject") || message.subject || message.preview?.subject;
  }
  if (selectedFields.includes("snippet") || selectedFields.includes("body")) {
    const base64Body = message.payload?.body?.data || "";
    result.snippet = message.preview?.body || Buffer.from(base64Body, "base64").toString("utf-8");
  }
  if (selectedFields.includes("date")) {
    result.date = headerMap("Date") || message.messageTimestamp;
  }

  return result;
};
