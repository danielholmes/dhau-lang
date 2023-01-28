function maxByOrThrow<T, R>(array: ArrayLike<T>, selector: (item: T) => R): T {
  if (array.length === 0) {
    throw new Error("No values");
  }
  let maxItem: T = array[0];
  let maxValue: R = selector(maxItem);
  for (let i = 1; i < array.length; i++) {
    const v = array[i];
    const valueComparison = selector(v);
    if (
      maxValue === undefined ||
      maxValue === null ||
      valueComparison > maxValue
    ) {
      maxItem = v;
      maxValue = valueComparison;
    }
  }
  return maxItem;
}

function maxOrThrow<T>(array: ArrayLike<T>): T {
  return maxByOrThrow(array, (v) => v);
}

export { maxByOrThrow, maxOrThrow };
