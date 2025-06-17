import { ToolDefinition } from "../types";
import * as composio from "@/providers/composio/gmail";

export const resolveProviderFunction = (tool: ToolDefinition) => {
  if (tool.provider === "composio") {
    const fn = getNested(composio, tool.providerFunction);
    if (!fn) throw new Error(`Function ${tool.providerFunction} not found in Composio`);
    return fn;
  }
  throw new Error(`Unsupported provider: ${tool.provider}`);
};

const getNested = (obj: any, path: string): any => {
  return path.split(".").reduce((o, p) => o?.[p], obj);
};
