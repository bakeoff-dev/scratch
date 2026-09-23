export function paginate<T>(items: T[], page: number, size: number): T[] {
  const { start, end } = pageSlice(page, size);
  return items.slice(start, end);
}

export function pageSlice(page: number, size: number): { start: number; end: number } {
  return { start: (page - 1) * size, end: page * size };
}
