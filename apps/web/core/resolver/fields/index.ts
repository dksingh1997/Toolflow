import { gmailPickFields } from "./gmail";
// import more as needed

const registry: Record<string, (obj: any, fields?: string[]) => any> = {
  "gmail.findEmail": gmailPickFields,
  // fallback: "default": defaultPickFields
};

export const getFieldPicker = (toolId: string) => {
      console.log("Getting field picker for tool:", toolId);

  return registry[toolId] || defaultPickFields;
};

const defaultPickFields = (obj: Record<string, any>, fields: string[] = []) => {
  return fields.reduce((acc, key) => {
    if (obj[key] !== undefined) acc[key] = obj[key];
    return acc;
  }, {} as Record<string, any>);
};
