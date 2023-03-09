import { isString } from './stringUtils'
/**
 * Get the parameters and values from the URL and return them as a parameter object
 * @since v1.0.4
 * @category URL
 * @param {string} url - URL
 * @returns {Record<string, string> } Parameter - URL Parameter
 * @example
 *
 * const url = 'http://localhost:8080?name=value'
 * console.log(
 *  getURLParameter(url)
 * )
 * => { name: 'value' }
 */
export function getURLParameter(url: string): Record<string, string> {
  const parameter: Record<string, string> = {}
  try {
    if (!isString(url) || url.trim().length === 0) {
      return {}
    }
    const targetURL = new URL(url)
    for (const [key, value] of targetURL.searchParams.entries()) {
      parameter[key] = value
    }
  } catch (error) {
    // TODO catch error
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
 *  getURLParameterValue(url, 'test')
 * )
 * => 'value'
 */
export function getURLParameterValue(url: string, key: string): string {
  const parameter = getURLParameter(url)
  if (parameter[key] && parameter[key].length > 0) {
    return parameter[key]
  }
  return ''
}
