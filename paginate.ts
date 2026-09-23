export function paginate<T>(
  items: T[],
  page: number,
  size: number,
  options: { tail?: boolean } = {},
): T[] {
  if (options.tail) {
    return items.slice(-size);
  }

  return items.slice((page - 1) * size, page * size);
}
