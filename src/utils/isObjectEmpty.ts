export function isObjectEmpty(obj: object | undefined) {
    if (!obj) return
    return Object.keys(obj).length === 0;
}
