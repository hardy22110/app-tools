/**
 * Find the target item in the object array
 * @static
 * @since 1.0.4
 * @category Object
 * @param {Record<string, any>[]} list
 * @param {Record<string, any>} target
 * @returns {Record<string, any> | undefined} result
 * @example
 *
 * const list = [{ ID: 1, label: 'label1' }, { ID: 2, label: 'label2' }]
 * console.log(
 *  findTargetObject(list, { a: 1 })
 * )
 * => { ID: 1, label: 'label1' }
 */
export function findTargetObject(
  list: Record<string, any>[],
  target: Record<string, any>
): Record<string, any> | undefined {
  try {
    return list.find((item) =>
      Object.keys(target).find((key) => target[key] === item[key])
    )
  } catch (error) {
    return undefined
  }
}
