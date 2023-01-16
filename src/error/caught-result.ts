function caughtResultToError(error: unknown): Error {
    // TODO: Must be a better check
    if (typeof error === "object" && error) {
      return error as any;
    }
    return new Error(String(error));
  }
  
  function caughtResultToString(error: unknown): string {
    if (typeof error === "string") {
      return error;
    }
    return String(error);
  }
  
  export { caughtResultToString, caughtResultToError };
  