export function list<T>(items: T[], options: { unique?: boolean } = {}): T[] {
  return options.unique ? [...new Set(items)] : items;
}
