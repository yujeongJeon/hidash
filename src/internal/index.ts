export function isLength(value: unknown): value is number {
    return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER
}

export function isArrayLike(value: unknown): value is {length: number} {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return value != null && typeof value !== 'function' && isLength((value as any).length)
}
