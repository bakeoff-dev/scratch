export function list<T>(items: T[], { tail }: { tail?: number } = {}): T[] {
  if (tail === undefined) return [...items];
  if (!Number.isInteger(tail) || tail < 0) throw new Error(`--tail expects a non-negative integer, got ${tail}`);
  return tail === 0 ? [] : items.slice(-tail);
}

export function runList(argv: string[]): string {
  let tail: number | undefined;
  const items: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;
    if (arg === '--tail') {
      const value = argv[++i];
      if (value === undefined) throw new Error('--tail requires a value');
      tail = parseTail(value);
    } else if (arg.startsWith('--tail=')) {
      tail = parseTail(arg.slice('--tail='.length));
    } else {
      items.push(arg);
    }
  }

  return list(items, { tail }).join('\n');
}

function parseTail(value: string): number {
  const tail = Number(value);
  if (!Number.isInteger(tail) || tail < 0) throw new Error(`--tail expects a non-negative integer, got ${value}`);
  return tail;
}

if (import.meta.main) console.log(runList(process.argv.slice(2)));
