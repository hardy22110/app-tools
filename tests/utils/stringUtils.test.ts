import { isString, truncate, setStringValue } from '@/utils/stringUtils'

describe('isString', () => {
  it('should return true if value is a string', () => {
    expect(isString('')).toBe(true)
    expect(isString('hello')).toBe(true)
  })

  it('should return false if value is not a string', () => {
    expect(isString(123)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
  })
})

describe('truncate', () => {
  it('returns empty string when input is an empty string', () => {
    expect(truncate('', 10)).toEqual('')
  })
  it('returns original input when input is not a string', () => {
    expect(truncate(123, 10)).toEqual(123)
    expect(truncate(true, 10)).toEqual(true)
    expect(truncate(null, 10)).toEqual(null)
    expect(truncate(undefined, 10)).toEqual(undefined)
  })
  it('returns original input when input length is shorter than maxLength', () => {
    expect(truncate('hello', 10)).toEqual('hello')
    expect(truncate('你好', 3)).toEqual('你好')
  })
  it('returns truncated string when input length is longer than maxLength', () => {
    expect(truncate('hello world', 5)).toEqual('hello')
    expect(truncate('你好世界', 2)).toEqual('你好')
  })
  it('returns original input when input length is equal to maxLength', () => {
    expect(truncate('hello', 5)).toEqual('hello')
    expect(truncate('你好', 2)).toEqual('你好')
  })
})

describe('setStringValue', () => {
  test('should return converted string when value is string', () => {
    const result = setStringValue('test', 'default')
    expect(result).toEqual('test')
  })
  test('should return default value when value is not string', () => {
    const result = setStringValue(123, 'default')
    expect(result).toEqual('default')
  })
  test('should return default value when value is undefined', () => {
    const result = setStringValue(undefined, 'default')
    expect(result).toEqual('default')
  })
  test('should return defaultStringValue if value is number', () => {
    expect(setStringValue(42, 'default')).toBe('default')
  })
  test('should return undefined when defaultStringValue is undefined', () => {
    expect(setStringValue(42)).toBeUndefined()
  })
})
