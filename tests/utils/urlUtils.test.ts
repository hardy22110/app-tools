import { getURLParams, getURLParamValue } from '@/utils/urlUtils'
describe('getURLParams', () => {
  it('should parse params correctly', () => {
    expect(getURLParams('https://www.example.com?foo=bar&baz=qux')).toEqual({
      foo: 'bar',
      baz: 'qux'
    })
  })

  it('should handle url encoding correctly', () => {
    expect(getURLParams('https://www.example.com?foo=%3C%3E%26')).toEqual({
      foo: '<>&'
    })
  })

  it('should handle multiple parameters with the same name', () => {
    expect(getURLParams('https://www.example.com?foo=1&foo=2')).toEqual({
      foo: '2'
    })
  })

  it('should handle special characters in parameter names', () => {
    expect(
      getURLParams('https://www.example.com?foo[bar]=baz&foo[baz]=qux')
    ).toEqual({
      'foo[bar]': 'baz',
      'foo[baz]': 'qux'
    })
  })

  it('returns an empty object when passed a URL with invalid search params', () => {
    const invalidURL = 'https://example.com/?param1=%2B&param2=123&add=+'
    const result = getURLParams(invalidURL)
    expect(result).toEqual({ param1: '+', param2: '123', add: ' ' })
    expect(
      getURLParams('https://www.example.com?reserved=/?:@&=+$,;#[]"<>{|}\\^`')
    ).toEqual({
      reserved: '/?:@'
    })
  })

  test('getURLParams correctly parses query string parameters with special characters', () => {
    const url =
      'https://example.com/?param1=%E4%B8%AD%E6%96%87&param2=%E2%98%83%20Snowman&param3=%F0%9F%8C%9E'
    const result = getURLParams(url)
    expect(result).toEqual({
      param1: '中文',
      param2: '☃ Snowman',
      param3: '🌞'
    })
  })

  it('returns an object with empty string values for reserved characters', () => {
    const reservedURL =
      'https://example.com/?reserved=%2F%3F%3A%40%26%3D%2B%24%2C%3B%23%5B%5D%22%3C%3E%7B%7D%7C%5C%5E%60%20'
    const result = getURLParams(reservedURL)
    expect(result).toEqual({
      reserved: '/?:@&=+$,;#[]"<>{}|\\^` '
    })
  })

  it('should handle special characters in parameter values', () => {
    expect(getURLParams('https://www.example.com?foo=%22bar%22')).toEqual({
      foo: '"bar"'
    })
  })

  it('should handle URL fragment correctly', () => {
    expect(getURLParams('https://www.example.com#foo=bar')).toEqual({})
  })

  it(`should return empty if url is no parameter`, () => {
    expect(getURLParams('https://www.example.com')).toEqual({})
    expect(getURLParams('')).toStrictEqual({})
    expect(getURLParams(' ' as any)).toStrictEqual({})
  })

  it(`should return empty if parameter is not a string`, () => {
    expect(getURLParams(undefined as any)).toStrictEqual({})
    expect(getURLParams(null as any)).toStrictEqual({})
    expect(getURLParams(1 as any)).toStrictEqual({})
    expect(getURLParams([] as any)).toStrictEqual({})
    expect(getURLParams({} as any)).toStrictEqual({})
  })
})

describe('getURLParamValue', () => {
  test('getURLParamValue returns correct value for alphanumeric parameter', () => {
    const url = 'https://example.com/?param1=value1&param2=value2'
    const key = 'param1'
    const result = getURLParamValue(url, key)
    expect(result).toBe('value1')
  })

  test('getURLParamValue returns correct value for parameter with reserved characters', () => {
    const url =
      'https://example.com/?reserved=%2F%3F%3A%40%26%3D%2B%24%2C%3B%23%5B%5D%22%3C%3E%7B%7D%7C%5C%5E%60%20'
    const key = 'reserved'
    const result = getURLParamValue(url, key)
    expect(result).toBe('/?:@&=+$,;#[]"<>{}|\\^` ')
  })

  test('getURLParamValue returns correct value for parameter with Chinese and Unicode characters', () => {
    const url = 'https://example.com/?中文=测试&unicode=%E6%B5%8B%E8%AF%95'
    const key1 = '中文'
    const key2 = 'unicode'
    const result1 = getURLParamValue(url, key1)
    const result2 = getURLParamValue(url, key2)
    expect(result1).toBe('测试')
    expect(result2).toBe('测试')
  })

  test('getURLParamValue returns correct value for parameter with special characters in name and value', () => {
    const url = 'https://example.com/?%24param%24=%24value%24'
    const key = '$param$'
    const result = getURLParamValue(url, key)
    expect(result).toBe('$value$')
  })

  test('getURLParamValue returns empty string when parameter does not exist', () => {
    const url = 'https://example.com/?param1=value1&param2=value2'
    const key = 'non-existent'
    const result = getURLParamValue(url, key)
    expect(result).toBe('')
  })
})
