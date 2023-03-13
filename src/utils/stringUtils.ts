/**
 * The input is a string
 * @since v1.0.4
 * @category String
 * @param  value - The string to truncate.
 * @returns value is string
 * @example
 *
 * console.log(
 *  isString('example')
 * )
 * => true
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Truncates a string to the specified maximum length
 * @since v1.0.4
 * @category String
 * @param  str The string to truncate.
 * @param  maxLength The maximum string length.
 * @returns The truncated string.
 * @example
 *
 * console.log(
 *  truncate('example', 3)
 * )
 * => 'exa'
 */
export function truncate<T>(str: T, maxLength: number): T | string {
  if (!isString(str) || str.length <= maxLength) {
    return str
  }
  return str.slice(0, maxLength)
}


/**
 * Set input if value is string then set in instead of set in default value
 * @since v1.0.4
 * @category String
 * @param value
 * @param defaultValue
 * @returns value or defaultValue
 * @example
 *
* const stringValue = setStringValue('example', '')
* console.log(
*  numberValue
* )
* => 'example'
*
* const nullValue = setStringValue(null, '')
* console.log(
*  numberValue
* )
* => ''
*/
export function setStringValue<T>(
 value: T,
 defaultValue?: string
): T | string | undefined {
 if (isString(value)) {
   return value
 }
 return defaultValue
}