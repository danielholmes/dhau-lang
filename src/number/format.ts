type Options = {
  readonly decimalPlaces: number;
};

function formatPercentage(ratio: number, options?: Options): string {
  return `${(ratio * 100).toFixed(options?.decimalPlaces ?? 0)}%`;
}

export { formatPercentage };
