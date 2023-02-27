import { findTargetObject, filterObjectList } from '@/utils/arrayUtil'

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

describe('filterObjectList', () => {
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

  it('call filterObjectList(objectList, { a: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectList(objectList, { a: 1 })).toStrictEqual([
      objectList[0],
    ])
  })

  it('call filterObjectList(objectList, { a: 1, b: 1 }) returns [objectList[0]]', () => {
    expect(filterObjectList(objectList, { a: 1, b: 1 })).toStrictEqual([
      objectList[0],
    ])
  })

  it('call filterObjectList(objectList, { flag: true }) returns [objectList[0], objectList[1]]', () => {
    expect(filterObjectList(objectList, { flag: true })).toStrictEqual([
      objectList[0],
      objectList[1],
    ])
  })

  it('call filterObjectList(objectList, { a: 1, c: 1 }) returns []', () => {
    expect(filterObjectList(objectList, { a: 1, c: 1 })).toStrictEqual([])
  })

  it('call filterObjectList(objectList, { a: 3 }) returns []', () => {
    expect(filterObjectList(objectList, { a: 3 })).toStrictEqual([
      objectList[2],
    ])
  })

  it('call filterObjectList(objectList, undefined) returns []', () => {
    expect(filterObjectList(objectList, undefined as any)).toStrictEqual([])
  })

  it(`call filterObjectList(objectList, { a: '1' }) returns []`, () => {
    expect(filterObjectList(objectList, { a: '1' })).toStrictEqual([])
  })

  it(`call filterObjectList(objectList, {}) returns []`, () => {
    expect(filterObjectList(objectList, {})).toStrictEqual(objectList)
  })
})
