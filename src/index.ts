import * as numberUtil from './utils/numberUtils'
import * as arrayUtil from './utils/arrayUtils'
import * as stringUtils from './utils/stringUtils'
/**
 * @since 1.0.0
 * get the app-tools version
 * @returns {string} version
 * @example
 *
 * console.log(
 *  getVersion()
 * )
 * => v1.0.0
 */
function getVersion(): string {
  return `v1.0.3`
}

export { getVersion, numberUtil, arrayUtil, stringUtils }
