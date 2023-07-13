import { sum, getQuote } from './businessLogic'

it('computes the sum of two numbers', async () => {
  const a = 1
  const b = 2
  const c = sum(a, b)
  expect(c).toBe(a + b)
})

it('gets a quote', async () => {
  for (let a = 0; a < 10; a++) {
    const quote = await getQuote()
    console.log(quote)
  }
  const quote = await getQuote()
  expect(typeof quote).toBe('string')
})
