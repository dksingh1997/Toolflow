export interface ToolDefinition {
  id: string;
  name: string;
  description?: string;
  provider: "composio" | "pipedream" | "custom";
  providerFunction: string;
  fieldMode: "ai" | "custom" | "all" | "minimal";
  minimalFields?: string[];
  auth?: "oauth2" | "apikey" | "none";
}