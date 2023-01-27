function findOnlyIndex<T>(
  array: ReadonlyArray<T>,
  predicate: (item: T) => boolean,
  message?: string
): number {
  let foundIndex: number | undefined;
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      if (foundIndex !== undefined) {
        throw new Error(
          message ?? `Expected exactly one item, found more than 1`
        );
      }
      foundIndex = i;
    }
  }
  if (foundIndex === undefined) {
    throw new Error(message ?? `Expected exactly one item, found 0`);
  }
  return foundIndex;
}

function findOnly<T>(
  array: ReadonlyArray<T>,
  predicate: (item: T) => boolean,
  message?: string
): T {
  const index = findOnlyIndex(array, predicate, message);
  return array[index];
}

export { findOnlyIndex, findOnly };
