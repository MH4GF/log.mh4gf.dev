import { dateFormat } from './dateFormat'

describe('dateFormat', () => {
  it('work', () => {
    const date = new Date(Date.parse('2022-12-31T14:59:00.000Z'))
    expect(dateFormat(date)).toBe('2022/12/31')
  })
  it('plus 9 hours', () => {
    const date = new Date(Date.parse('2022-12-31T15:00:00.000Z'))
    expect(dateFormat(date)).toBe('2023/1/1')
  })
})
