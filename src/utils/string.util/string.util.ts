/* eslint-disable */
export const stringUtil = {
  parse,
  toString,
  spaceToDash,
  toLowerCase,
  generateTempPassword,
  getStringAfterFirstDot,
  formatCamelCaseToWords,
  parseCamelCaseAndCapitalize,
};

export function toString(data: any) {
  if (!data) return "";
  return JSON.stringify(data);
}

export function parse(data: any) {
  if (!data) return data;
  return JSON.parse(data);
}

export function spaceToDash(word: string): string {
  return word.replace(/[ ]/g, "-");
}

export function toLowerCase(word: string): string {
  return word.toLowerCase();
}

export function generateTempPassword(): string {
  return Math.random().toString(36).slice(-8).concat("Ii2!");
}

export function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function shallowObjectToQueryString(obj: Record<string, string>): string {
  return "?" + new URLSearchParams(obj).toString();
}

export function getStringAfterFirstDot(input: string): string {
  const parts = input.split(".");
  return parts.length > 1 ? parts.slice(1).join(".") : input;
}

export function formatCamelCaseToWords(input: string): string {
  return input
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .trim();
}

export function parseCamelCaseAndCapitalize(input: string): string {
  return capitalizeString(input.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"));
}
