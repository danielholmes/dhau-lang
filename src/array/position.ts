function first<T>(array: ReadonlyArray<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "Unable to find first - empty array");
  }
  return array[0];
}

function last<T>(array: ReadonlyArray<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "Unable to find last - empty array");
  }
  return array[array.length - 1];
}

export { first, last };
