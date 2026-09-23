export function list(items: string[], { reverse = false } = {}): string[] {
  return reverse ? [...items].reverse() : [...items];
}

export function runList(argv: string[]): string {
  const reverse = argv.includes('--reverse');
  const items = argv.filter((arg) => arg !== '--reverse');
  return list(items, { reverse }).join('\n');
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
