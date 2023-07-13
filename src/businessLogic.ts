import axios from 'axios'

interface IQuote {
  a: string
  c: string
  h: string
  q: string
}

export const getQuote = async (): Promise<string> => {
  const response = await axios.get<IQuote[]>('https://zenquotes.io/api/quotes/')
  const quotes = response.data.map(quote => quote.q)
  const quote = quotes.at(0) as string
  return quote
}

export const sum = (a: number, b: number): number => {
  const c = a + b
  return c
}
