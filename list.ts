export interface ListOptions {
  reverse?: boolean;
  dedupe?: boolean;
}

export function list(items: string[], { reverse = false, dedupe = false }: ListOptions = {}): string[] {
  const result = dedupe ? [...new Set(items)] : [...items];
  return reverse ? result.reverse() : result;
}

export function runList(argv: string[]): string {
  const reverse = argv.includes('--reverse');
  const dedupe = argv.includes('--dedupe');
  const items = argv.filter((arg) => arg !== '--reverse' && arg !== '--dedupe');
  return list(items, { reverse, dedupe }).join('\n');
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
