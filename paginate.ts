export function paginate<T>(items: T[], page: number, size: number): T[] {
  return items.slice((page - 1) * size, page * size);
}

export function chunk<T>(items: T[], size: number): T[][] {
  if (size <= 0) {
    throw new RangeError('size must be greater than 0');
  }

  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}
