export class Storage {
  static get<T>(key: string): T | undefined {
    try {
      return JSON.parse(localStorage.getItem(key) as string) as T;
    } catch {
      return undefined;
    }
  }

  static set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static has(key: string): boolean {
    return !!localStorage.getItem(key);
  }
}
