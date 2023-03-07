import { isNumber, setNumberValue } from '@/utils/numberUtils'

describe('isNumber', () => {

  it(`call isNumber('1') return true`, () => {
    expect(isNumber('1')).toBe(true)
  })

  it(`call isNumber(0) return true`, () => {
    expect(isNumber(0)).toBe(true)
  })

  it(`call isNumber(null) return false`, () => {
    expect(isNumber(null)).toBe(false)
  })

  it(`call isNumber(undefined) return false`, () => {
    expect(isNumber(undefined)).toBe(false)
  })

  it(`call isNumber('') return false`, () => {
    expect(isNumber('')).toBe(false)
  })

  it(`call isNumber([]) return false`, () => {
    expect(isNumber([])).toBe(false)
  })

  it(`call isNumber(Infinity) return false`, () => {
    expect(isNumber(Infinity)).toBe(false)
  })
  
  it(`call isNumber(-Infinity) return false`, () => {
    expect(isNumber(-Infinity)).toBe(false)
  })
  
})

describe('setNumberValue', () => {
  it(`call setNumberValue(null, 0) returns 0`, () => {
    expect(setNumberValue(null, 0)).toBe(0)
  })

  it(`call setNumberValue('', 0) returns 0`, () => {
    expect(setNumberValue('', 0)).toBe(0)
  })

  it(`call setNumberValue(1) returns 1`, () => {
    expect(setNumberValue(1)).toBe(1)
  })

  it(`call setNumberValue(0, 2) returns 0`, () => {
    expect(setNumberValue(0, 2)).toBe(0)
  })

  it(`call setNumberValue('') returns undefined`, () => {
    expect(setNumberValue('')).toBe(undefined)
  })

  it(`call setNumberValue(1.111) returns 1.111`, () => {
    expect(setNumberValue(1.111)).toBe(1.111)
  })
})
