export const getHeaderValue = (headers: Array<{ name: string, value: string }>, key: string): string | undefined => {
  const header = headers.find(h => h.name.toLowerCase() === key.toLowerCase());
  return header?.value;
};
