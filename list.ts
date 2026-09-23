export function list<T>(items: T[], { unique }: { unique?: boolean } = {}): T[] {
  return unique ? [...new Set(items)] : items.slice();
}
