export type ListOptions = { reverse?: boolean };

export function list<T>(items: T[], options: ListOptions = {}): T[] {
  const result = items.slice();
  return options.reverse ? result.reverse() : result;
}

export function parseListArgs(argv: string[]): { items: string[]; options: ListOptions } {
  const options: ListOptions = {};
  const items: string[] = [];
  for (const arg of argv) {
    if (arg === '--reverse') options.reverse = true;
    else items.push(arg);
  }
  return { items, options };
}

if (import.meta.main) {
  const { items, options } = parseListArgs(process.argv.slice(2));
  for (const item of list(items, options)) console.log(item);
}
