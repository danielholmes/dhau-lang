function findOnly<T>(array: ReadonlyArray<T>, predicate: (item: T) => boolean, message?: string): T {
    const found = array.filter(predicate);
    if (found.length !== 1) {
        throw new Error(message ?? `Expected exactly one item, found ${found.length}`);
    }
    return found[0];
}

export { findOnly };