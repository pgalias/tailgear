export class Storage {
  static get<T>(key: string): T | undefined {
    try {
      return JSON.parse(sessionStorage.getItem(key) as string) as T;
    } catch {
      return undefined;
    }
  }

  static set<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}
