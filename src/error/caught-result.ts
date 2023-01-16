function isError(error: unknown): error is Error {
  // TODO: Must be a better check
  return typeof error === "object" && !!error;
}

function caughtResultToError(error: unknown): Error {
  if (isError(error)) {
    return error;
  }
  return new Error(caughtResultToString(error));
}

function caughtResultToString(error: unknown): string {
  if (isError(error)) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return String(error);
}

export { caughtResultToString, caughtResultToError };
