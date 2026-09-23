export interface ListOptions {
  reverse?: boolean;
  dedupe?: boolean;
  count?: boolean;
}

export function list(items: string[], { reverse = false, dedupe = false }: ListOptions = {}): string[] {
  const result = dedupe ? [...new Set(items)] : [...items];
  return reverse ? result.reverse() : result;
}

export function runList(argv: string[]): string {
  const reverse = argv.includes('--reverse');
  const dedupe = argv.includes('--dedupe');
  const count = argv.includes('--count');
  const items = argv.filter((arg) => arg !== '--reverse' && arg !== '--dedupe' && arg !== '--count');
  const result = list(items, { reverse, dedupe });
  return count ? result.length.toString() : result.join('\n');
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
