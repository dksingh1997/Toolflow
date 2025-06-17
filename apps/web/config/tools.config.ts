import { ToolDefinition } from "../core/types";

export const tools: ToolDefinition[] = [
  {
    id: "gmail.findEmail",
    name: "Gmail: Find Email",
    description: "Finds emails using Gmail via Composio integration",
    provider: "composio",
    providerFunction: "gmail.searchEmails",
    fieldMode: "ai", // could also be 'manual' or 'all'
    fieldOverrides: ["subject", "snippet", "from", "date"],
    auth: "oauth2"
  }
];