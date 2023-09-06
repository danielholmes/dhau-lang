function isError(error: unknown): error is Error {
  return error instanceof Error;
}

function unknownToString(error: unknown): string {
  if (isError(error)) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return String(error);
}

function caughtResultToError(error: unknown): Error {
  if (isError(error)) {
    return error;
  }
  return new Error(unknownToString(error));
}

export { unknownToString, caughtResultToError };
