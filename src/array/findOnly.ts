function findOnly<T>(array: ReadonlyArray<T>, predicate: (item: T) => boolean): T {
    const found = array.filter(predicate);
    if (found.length !== 1) {
        throw new Error(`Expected exactly one item, found ${found.length}`);
    }
    return found[0];
}

export default findOnly;