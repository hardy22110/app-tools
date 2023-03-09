import { getURLParameter } from '@/utils/urlUtils'
describe.only('getURLParameter', () => {
  it(`should return parameter if parameter in the url `, () => {
    expect(getURLParameter('localhost:8080?oo=&xx=xx')).toStrictEqual({
      oo: '',
      xx: 'xx'
    })
    expect(getURLParameter('localhost:8080?oo=oo&xx=xx')).toStrictEqual({
      oo: 'oo',
      xx: 'xx'
    })
  })
  it(`should return parameter If there is a symbol in the parameter value in the url`, () => {
    expect(getURLParameter('http://localhost:8080/?oo=+')).toStrictEqual({
      oo: ' '
    })
  })
  it(`should return empty if url is no parameter`, () => {
    expect(getURLParameter('localhost:8080')).toStrictEqual({})
    expect(getURLParameter('')).toStrictEqual({})
    expect(getURLParameter(' ' as any)).toStrictEqual({})
    expect(getURLParameter('asd' as any)).toStrictEqual({})
  })
  it(`should return empty if parameter is not a string`, () => {
    expect(getURLParameter(undefined as any)).toStrictEqual({})
    expect(getURLParameter(null as any)).toStrictEqual({})
    expect(getURLParameter(1 as any)).toStrictEqual({})
    expect(getURLParameter([] as any)).toStrictEqual({})
    expect(getURLParameter({} as any)).toStrictEqual({})
  })
})
