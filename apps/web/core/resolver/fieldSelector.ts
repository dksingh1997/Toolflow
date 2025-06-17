export const applyFieldSelection = (data: any, fieldMode: string, fieldOverrides?: string[]) => {
  if (fieldMode === "all") return data;
  if (fieldMode === "manual" && fieldOverrides) {
    return Array.isArray(data)
      ? data.map(item => pickFields(item, fieldOverrides))
      : pickFields(data, fieldOverrides);
  }
  if (fieldMode === "ai") {
    // TODO: Plug in AI field selector logic
    return data; // default fallback
  }
  return data;
};

const pickFields = (obj: Record<string, any>, fields: string[]) => {
  return fields.reduce((acc, key) => {
    if (obj[key] !== undefined) acc[key] = obj[key];
    return acc;
  }, {} as Record<string, any>);
};
