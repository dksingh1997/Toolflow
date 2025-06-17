import { tools } from "@/config/tools.config";
import { ToolDefinition } from "../types";

export const getToolById = (id: string): ToolDefinition | undefined => {
  return tools.find(tool => tool.id === id);
};
