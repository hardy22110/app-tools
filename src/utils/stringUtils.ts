/**
 * The input is a string
 * @description  No String as a constructor detection
 * @param value Input
 * @returns Result
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
