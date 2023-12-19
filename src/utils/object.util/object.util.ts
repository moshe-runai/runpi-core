export const objectUtil = {
  isEmpty,
};

export function isEmpty(object: object | undefined | null): boolean {
  return !object || Object.keys(object).length === 0;
}
