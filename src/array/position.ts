function first<T>(array: ReadonlyArray<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "No items found");
  }
  return array[0];
}

function last<T>(array: ReadonlyArray<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "No items found");
  }
  return array[array.length - 1];
}

export { first, last };
