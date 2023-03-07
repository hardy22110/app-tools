/**
 * Find the target item in the object array
 * @since v1.0.4
 * @category Array
 * @param {Record<string, any>[]} list
 * @param {Record<string, any>} target
 * @returns {Record<string, any> | undefined} result
 * @example
 *
 * const list = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  findTargetObject(list, { ID: 1 })
 * )
 * => { ID: 1, label: 'label1' }
 */
export function findTargetObject(
  list: Record<string, any>[],
  target: Record<string, any>
  // TODO other conditions
): Record<string, any> | undefined {
  try {
    if (Object.keys(target).length === 0) {
      return undefined
    }
    return list.find((item) =>
      Object.keys(target).every((key) => target[key] === item[key])
    )
  } catch {
    // TODO print catch error
    return undefined
  }
}

/**
 * Filter the target object in the object array
 * @since v1.0.4
 * @category Array
 * @param {Record<string, any>[]} list
 * @param {Record<string, any>} object
 * @returns {Record<string, any[]> } result
 * @example
 *
 * const list = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  filterObjectArray(list, { ID: 1 })
 * )
 * => [{ ID: 1, label: 'label1' }]
 */
export function filterObjectArray(
  list: Record<string, any>[],
  object: Record<string, any>
  // TODO other conditions
): Record<string, any>[] {
  try {
    return list.filter((item) =>
      Object.keys(object).every((key) => object[key] === item[key])
    )
  } catch {
    // TODO print catch error
    return []
  }
}

export function setObjectArray(originList: Record<string, any>[]) {

}
