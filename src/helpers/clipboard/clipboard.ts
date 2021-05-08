export class Clipboard {
  static write(text = ''): void {
    navigator.clipboard.writeText(text);
  }
}
