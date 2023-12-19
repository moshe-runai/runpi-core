export const storageUtil = {
  save,
  get,
  remove,
};

function get<T>(key: string): T {
  const data: string | null = localStorage.getItem(key);
  return data && data !== "undefined" ? JSON.parse(data) : null;
}

function save<T>(key: string, item: T): void {
  localStorage.setItem(key, JSON.stringify(item));
}

function remove(key: string): void {
  localStorage.removeItem(key);
}
