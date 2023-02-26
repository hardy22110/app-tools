import { findTargetObject } from '@/utils/arrayUtil'

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

  it('call findTargetObject(list, { a: 3 }) returns undefined', () => {
    expect(findTargetObject(list, { a: 3 })).toBe(undefined)
  })

  it('call findTargetObject(list, undefined) returns undefined', () => {
    expect(findTargetObject(list, undefined as any)).toBe(undefined)
  })

  it(`call findTargetObject(list, { a: '1' }) returns undefined`, () => {
    expect(findTargetObject(list, { a: '1' })).toBe(undefined)
  })
})
