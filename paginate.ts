export function paginate<T>(items: T[], page: number, size: number): T[] {
  return items.slice((page - 1) * size, page * size);
}

export function pageCount(total: number, size: number): number {
  return Math.ceil(total / size);
}
