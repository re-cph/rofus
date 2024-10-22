export type PartialKeys<T, K extends keyof T> = Partial<Record<K, T[K]>>;
