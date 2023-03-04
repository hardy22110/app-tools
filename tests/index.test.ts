import appTools from '@/index'

describe('getVersion', () => {
  it('should return correct greeting', () => {
    expect(appTools.getVersion()).toBe('v1.0.3')
  })
})
