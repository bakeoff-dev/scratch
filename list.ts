export type ListOptions = { reverse: boolean };

export function parseArgs(argv: string[]): { items: string[]; options: ListOptions } {
  const options: ListOptions = { reverse: false };
  const items: string[] = [];
  for (const arg of argv) {
    if (arg === '--reverse') options.reverse = true;
    else if (arg.startsWith('--')) throw new Error(`unknown flag: ${arg}`);
    else items.push(arg);
  }
  return { items, options };
}

export function list<T>(items: T[], options: ListOptions = { reverse: false }): T[] {
  return options.reverse ? [...items].reverse() : [...items];
}

export function formatList<T>(items: T[], options?: ListOptions): string {
  return list(items, options).join('\n');
}

if (import.meta.main) {
  const { items, options } = parseArgs(Bun.argv.slice(2));
  console.log(formatList(items, options));
}
