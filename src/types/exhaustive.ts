// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ensureExhaustive(_x: never): never {
  throw new Error("Reached a branch with non-exhaustive checks");
}

export { ensureExhaustive };
