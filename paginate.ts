export function paginate<T>(items: T[], page: number, size: number): T[] {
  if (size < 1) {
    throw new RangeError('size must be at least 1');
  }

  return items.slice((page - 1) * size, page * size);
}
