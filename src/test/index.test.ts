import { getVersion } from '@/index'

describe('getVersion', () => {
  it('should return correct greeting', () => {
    expect(getVersion()).toBe('v1.0.3')
  })
})
