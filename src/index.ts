import * as numberUtil from './utils/numberUtil'
import * as arrayUtil from './utils/arrayUtil'
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

export default {
  getVersion,
  numberUtil,
  arrayUtil,
}
