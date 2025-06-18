import { getFieldPicker } from "./fields";

export const applyFieldSelection = (
  data: any,
  fieldMode: string,
  minimalFields?: string[],
  toolId?: string
) => {
  if (fieldMode === "all") return data;

  // console.log(data, fieldMode, minimalFields, toolId)

  const pickFields = getFieldPicker(toolId || "");

  if (fieldMode === "custom" || fieldMode === "minimal") {
    // Check if this is a Gmail-like response
    if (data?.data?.messages && Array.isArray(data.data.messages)) {
      const processedMessages = data.data.messages.map((msg: any) =>
        pickFields(msg, minimalFields)
      );

      return {
        ...data,
        data: {
          ...data.data,
          messages: processedMessages,
        },
      };
    }

    // Fallback if it's already an array or object
    return Array.isArray(data)
      ? data.map(item => pickFields(item, minimalFields))
      : pickFields(data, minimalFields);
  }

  if (fieldMode === "ai") {
    return data;
  }

  if (fieldMode === "ai") {
    // TODO: AI-powered field selection
    return data;
  }

  return data;
};
