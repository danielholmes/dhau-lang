function firstOrThrow<T>(array: ArrayLike<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "Unable to find first - empty array");
  }
  return array[0];
}

function lastOrThrow<T>(array: ArrayLike<T>, message?: string): T {
  if (array.length === 0) {
    throw new Error(message ?? "Unable to find last - empty array");
  }
  return array[array.length - 1];
}

export { firstOrThrow, lastOrThrow };
