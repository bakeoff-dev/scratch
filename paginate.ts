export function paginate<T>(items: T[], page: number, size: number): T[] {
  return items.slice((page - 1) * size, page * size);
}

export function tail<T>(items: T[], count: number): T[] {
  return count <= 0 ? [] : items.slice(-count);
}
