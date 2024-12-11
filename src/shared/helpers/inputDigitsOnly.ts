export const inputDigitsOnly = (value: string): string => {
  return value
    .replace(/[^0-9.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.{2,}|(\.\d*)\./g, "$1");
};
