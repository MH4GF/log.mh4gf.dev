import { expect, test } from 'playwright'

test('index', async ({ page }) => {
  await page.goto('/')
  expect(page.getByRole('heading', { name: 'Hirotaka Miyagi' }))
})
