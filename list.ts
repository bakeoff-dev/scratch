export function list(items: string[], { sort = false }: { sort?: boolean } = {}): string[] {
  return sort ? [...items].sort() : items;
}

export function runList(argv: string[]): string {
  let sort = false;
  const items: string[] = [];

  for (const arg of argv) {
    if (arg === '--sort') {
      sort = true;
    } else {
      items.push(arg);
    }
  }

  return list(items, { sort }).join('\n');
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
