export function list<T>(items: T[], { limit, sort = false }: { limit?: number; sort?: boolean } = {}): T[] {
  const result = sort ? [...items].sort() : [...items];
  if (limit === undefined) return result;
  if (!Number.isInteger(limit) || limit < 0) throw new Error(`--limit expects a non-negative integer, got ${limit}`);
  return result.slice(0, limit);
}

export function runList(argv: string[]): string {
  let limit: number | undefined;
  let sort = false;
  const items: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;
    if (arg === '--sort') {
      sort = true;
    } else if (arg === '--limit') {
      const value = argv[++i];
      if (value === undefined) throw new Error('--limit requires a value');
      limit = parseLimit(value);
    } else if (arg.startsWith('--limit=')) {
      limit = parseLimit(arg.slice('--limit='.length));
    } else {
      items.push(arg);
    }
  }

  return list(items, { limit, sort }).join('\n');
}

function parseLimit(value: string): number {
  const limit = Number(value);
  if (!Number.isInteger(limit) || limit < 0) throw new Error(`--limit expects a non-negative integer, got ${value}`);
  return limit;
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
