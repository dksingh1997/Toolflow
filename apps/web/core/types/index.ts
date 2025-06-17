export interface ToolDefinition {
  id: string;
  name: string;
  description?: string;
  provider: "composio" | "pipedream" | "custom";
  providerFunction: string;
  fieldMode: "ai" | "manual" | "all";
  fieldOverrides?: string[];
  auth?: "oauth2" | "apikey" | "none";
}