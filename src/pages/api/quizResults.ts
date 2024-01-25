// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { quizResults } = req.body
      console.log(quizResults) // eslint-disable-line no-console
      res.status(200).json({ message: 'Quiz results submitted successfully' })
    } catch (error) {
      console.error('Error processing quiz results', error) // eslint-disable-line no-console
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
