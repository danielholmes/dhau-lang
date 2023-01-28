function findOnlyIndex<T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => boolean,
  message?: string
): number | undefined {
  let foundIndex: number | undefined;
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) {
      if (foundIndex !== undefined) {
        throw new Error(
          message ?? `Expected exactly one item, found more than 1`
        );
      }
      foundIndex = i;
    }
  }
  return foundIndex;
}

function findOnlyIndexOrThrow<T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => boolean,
  message?: string
): number {
  const foundIndex = findOnlyIndex(array, predicate, message);
  if (foundIndex === undefined) {
    throw new Error(message ?? `Expected exactly one item, found 0`);
  }
  return foundIndex;
}

export function findOnly<T, S extends T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => item is S,
  message?: string
): S | undefined;

export function findOnly<T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => boolean,
  message?: string
): T | undefined;

export function findOnly<T, S extends T>(
  array: ArrayLike<T>,
  predicate:
    | ((item: T, index: number) => item is S)
    | ((item: T, index: number) => boolean),
  message?: string
): T | undefined {
  const index = findOnlyIndex(array, predicate, message);
  if (index === undefined) {
    return undefined;
  }
  return array[index];
}

export function findOnlyOrThrow<T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => boolean,
  message?: string
): T;

export function findOnlyOrThrow<T, S extends T>(
  array: ArrayLike<T>,
  predicate: (item: T, index: number) => item is S,
  message?: string
): S;

export function findOnlyOrThrow<T, S extends T>(
  array: ArrayLike<T>,
  predicate:
    | ((item: T, index: number) => boolean)
    | ((item: T, index: number) => item is S),
  message?: string
): T {
  const index = findOnlyIndexOrThrow(array, predicate, message);
  return array[index];
}

export { findOnlyIndexOrThrow, findOnlyIndex };
