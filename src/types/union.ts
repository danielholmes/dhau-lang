type ExtractByField<T, TField extends keyof T, TValue> = T extends {
  [key in TField]: infer U;
}
  ? U extends TValue
    ? T
    : never
  : never;

export type { ExtractByField };
