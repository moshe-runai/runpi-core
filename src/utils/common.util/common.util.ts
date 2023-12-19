import { toString } from "../string.util";

export default {
  getRandomInt,
  makeId,
  getDateISO,
  deepCopy,
  arrayToMap,
  getEmptyArray,
  getEmptyMatrix,
  getResolveData,
  getRejectError,
  camelStyleToUnderscore,
  previewStrings,
  pick,
  omit,
  convertToFlatArray,
  formatNumberWithFixedDecimals,
  isNullOrUndefined,
  fallbackDefaultIfNullOrUndefined,
  openNewWindow,
};

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function makeId(length = 8): string {
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  let txt = "";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export function getDateISO(): string {
  const date: Date = new Date();
  return date.toISOString();
}

export function deepCopy<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function isNullOrUndefined<T>(value: T | undefined | null): boolean {
  return value === null || value === undefined;
}

export function fallbackDefaultIfNullOrUndefined<T>(value: T | undefined | null, defaultVal: T): T {
  return isNullOrUndefined(value) ? defaultVal : (value as T);
}

export function isEqual(val1: unknown, val2: unknown): boolean {
  return toString(val1) === toString(val2);
}

export function arrayToMap<T>(arr: Array<T> = [], byProp = "_id"): Map<string, T> {
  return arr.reduce((acc: Map<string, T>, item: T) => {
    acc.set(item[byProp as keyof object], item);
    return acc;
  }, new Map());
}

export function arrayToObjectMap<T>(arr: Array<T> = [], byProp: string | ((item: T) => string)): Record<string, T> {
  return arr.reduce((acc: Record<string, T>, item: T) => {
    const uniqueValue = typeof byProp === "function" ? byProp(item) : item[byProp as keyof T];
    acc[uniqueValue as string] = item;
    return acc;
  }, {});
}

export function objectValuesToArray(obj: object): Array<string | number | boolean> {
  const values = [];
  for (const key in obj) {
    if (typeof obj[key as keyof object] === "object") {
      values.push(...objectValuesToArray(obj[key as keyof object]));
    } else {
      values.push(obj[key as keyof object]);
    }
  }
  return values;
}

export function getEmptyArray(length: number): Array<undefined> {
  return Array.from({ length });
}

export function getEmptyMatrix(rows: number, cols: number): Array<Array<undefined>> {
  return Array.from({ length: rows }, () => getEmptyArray(cols));
}

export function getResolveData<T>(data: T, time = 2000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

export function getRejectError<T>(error: T, time = 2000): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error);
    }, time);
  });
}

export function camelStyleToUnderscore(word: string): string {
  return word.replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());
}

export function dashStyleToUnderscore(word: string): string {
  return word.replace(/[-]/g, "_");
}

export function separateDigitsAndLetters(text: string): Array<string> {
  return text.split(/(?<=\d)(?=[A-Z])/);
}

export function previewStrings(arrOfStrings: Array<string>, minToPreview = 1): string {
  if (!arrOfStrings || !arrOfStrings.length) return "-";

  if (arrOfStrings.length === 1) return arrOfStrings[0];
  arrOfStrings.sort((a: string, b: string) => a.localeCompare(b));
  let retVal = "";
  for (let i = 0; i < minToPreview && i < arrOfStrings.length; i++) {
    retVal += `${arrOfStrings[i]}, `;
  }

  retVal = retVal.substring(0, retVal.length - 2);

  if (arrOfStrings.length < minToPreview) return retVal;

  return `${retVal} + ${arrOfStrings.length - minToPreview} more`;
}

export function createDownloadLink(response: Blob, fileName: string): void {
  const href = URL.createObjectURL(response);
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", fileName); //or any other extension
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
}

export function pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> {
  const result: Partial<Pick<T, K>> = {};
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  });
  return result as Pick<T, K>;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}

// This function takes in the data parameter, which can be any data structure,
// and returns an array of strings without object keys. The flatMap() method is
// used to flatten any nested arrays or objects.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertToFlatArray(data: any): string[] {
  if (Array.isArray(data)) {
    return data.flatMap(convertToFlatArray);
  } else if (typeof data === "object" && data !== null) {
    return Object.values(data).flatMap(convertToFlatArray);
  } else {
    return [String(data)];
  }
}

export function formatNumberWithFixedDecimals(value: number, fixed: number): number {
  if (Number.isInteger(value)) {
    return value;
  } else {
    return +value.toFixed(fixed);
  }
}

export function openNewWindow(url: string): Window | null {
  return window.open(url.startsWith("http") ? url : "http://" + url);
}
