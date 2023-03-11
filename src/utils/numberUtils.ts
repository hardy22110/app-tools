/**
 * The input is a numeric value
 * @since v1.0.0
 * @category Number
 * @param {any} value
 * @returns {boolean} result
 * @example
 *
 * console.log(
 *  isNumber('1')
 * )
 * => true
 */
export function isNumber(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

/**
 * Set the input if the value converts a number to a number, if not then set the default value
 * @since v1.0.0
 * @category Number
 * @param {T} value
 * @param {T} defaultValue
 * @returns {T} value or defaultValue
 * @example
 *
 * const numberValue = setNumberValue('1', null)
 * console.log(
 *  numberValue
 * )
 * => 1
 *
 * const emptyValue = setNumberValue('')
 * console.log(
 *  numberValue
 * )
 * => undefined
 */
export function setNumberValue<T>(
  value: T,
  defaultValue?: number
): number | undefined {
  if (isNumber(value)) {
    return Number(value)
  }
  return defaultValue
}
