import { findTargetObject, filterObjectArray } from '@/utils/arrayUtil'

describe('findTargetObject', () => {
  const list = [
    {
      a: 1,
      b: 1,
    },
    {
      a: 2,
      b: 2,
    },
  ]

  it('call findTargetObject(list, { a: 1 }) returns list[0]', () => {
    expect(findTargetObject(list, { a: 1 })).toBe(list[0])
  })

  it('call findTargetObject(list, { a: 1, b: 1 }) returns list[0]', () => {
    expect(findTargetObject(list, { a: 1, b: 1 })).toBe(list[0])
  })

  it('call findTargetObject(list, { a: 1, c: 1 }) returns list[0]', () => {
    expect(findTargetObject(list, { a: 1, c: 1 })).toBe(undefined)
  })

  it('call findTargetObject(list, { a: 3 }) returns undefined', () => {
    expect(findTargetObject(list, { a: 3 })).toBe(undefined)
  })

  it('call findTargetObject(list, undefined) returns undefined', () => {
    expect(findTargetObject(list, undefined as any)).toBe(undefined)
  })

  it(`call findTargetObject(list, { a: '1' }) returns undefined`, () => {
    expect(findTargetObject(list, { a: '1' })).toBe(undefined)
  })

  it(`call findTargetObject(list, {}) returns list`, () => {
    expect(findTargetObject(list, {})).toBe(undefined)
  })
})

describe('filterObjectArray', () => {
  const objectList = [
    {
      a: 1,
      b: 1,
      flag: true,
    },
    {
      a: 2,
      b: 2,
      flag: true,
    },
    {
      a: 3,
      b: 3,
      flag: false,
    },
  ]

  it('call filterObjectArray(objectList, { a: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectArray(objectList, { a: 1 })).toStrictEqual([
      objectList[0],
    ])
  })

  it('call filterObjectArray(objectList, { a: 1, b: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectArray(objectList, { a: 1, b: 1 })).toStrictEqual([
      objectList[0],
    ])
  })

  it('call filterObjectArray(objectList, { flag: true }) returns [objectList[0], objectList[1]]', () => {
    expect(filterObjectArray(objectList, { flag: true })).toStrictEqual([
      objectList[0],
      objectList[1],
    ])
  })

  it('call filterObjectArray(objectList, { a: 1, c: 1 }) returns []', () => {
    expect(filterObjectArray(objectList, { a: 1, c: 1 })).toStrictEqual([])
  })

  it('call filterObjectArray(objectList, { a: 3 }) returns []', () => {
    expect(filterObjectArray(objectList, { a: 3 })).toStrictEqual([
      objectList[2],
    ])
  })

  it('call filterObjectArray(objectList, undefined) returns []', () => {
    expect(filterObjectArray(objectList, undefined as any)).toStrictEqual([])
  })

  it(`call filterObjectArray(objectList, { a: '1' }) returns []`, () => {
    expect(filterObjectArray(objectList, { a: '1' })).toStrictEqual([])
  })

  it(`call filterObjectArray(objectList, {}) returns []`, () => {
    expect(filterObjectArray(objectList, {})).toStrictEqual(objectList)
  })
})
