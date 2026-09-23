export function list(entries: string[], args: string[] = []): string {
  if (args.includes('--json')) {
    return JSON.stringify(entries);
  }

  return entries.join('\n');
}
