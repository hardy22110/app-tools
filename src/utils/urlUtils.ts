import { isString } from './stringUtils'
/**
 * Get the parameters and values from the URL and return them as a parameter object.
 * returns empty object if unresolvable path.
 * this parameter is ignored if the parameter cannot be parsed.
 * @since v1.0.4
 * @category URL
 * @param {string} url - URL
 * @returns {Record<string, string> } Parameter - URL Parameter
 * @example
 *
 * const url = 'http://localhost:8080?name=value'
 * console.log(
 *  getURLParams(url)
 * )
 * => { name: 'value' }
 */
export function getURLParams(url: string): Record<string, string> {
  let parameter: Record<string, string> = {}
  try {
    if (!isString(url) || url.trim().length === 0) {
      return {}
    }
    const targetURL = new URL(url)
    for (const [key, value] of targetURL.searchParams.entries()) {
      if (isString(key) && key.length > 0) {
        parameter[key] = value
      }
    }
  } catch {
    parameter = {}
  }
  return parameter
}

/**
 * Get the value of a parameter in the URL by inputting the parameter name.
 * @since v1.0.4
 * @category URL
 * @param {string} url - URL
 * @param {string} key - Parameter Name
 * @returns {Record<string, string> } Value - Parameter Value
 * @example
 *
 * const url = 'http://localhost:8080?name=value'
 * console.log(
 *  getURLParamValue(url, 'name')
 * )
 * => 'value'
 */
export function getURLParamValue(url: string, key: string): string {
  const parameter = getURLParams(url)
  if (parameter[key] && parameter[key].length > 0) {
    return parameter[key]
  }
  return ''
}
