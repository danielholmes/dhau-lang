function caughtResultToString(error: unknown): string {
    if (typeof error === "string") {
      return error;
    }
    return String(error);
  }
  
  export default caughtResultToString;
  