import { getToolById } from "../registry";
import { resolveProviderFunction } from "../router/resolveFn";
import { applyFieldSelection } from "../resolver/fieldSelector";

export const executeToolById = async (toolId: string, input: any) => {
  const tool = getToolById(toolId);
  if (!tool) throw new Error(`Tool ${toolId} not found`);

  const fn = resolveProviderFunction(tool);
  const rawResponse = await fn(input, tool);

  return applyFieldSelection(rawResponse, tool.fieldMode, tool.minimalFields, toolId);
};
