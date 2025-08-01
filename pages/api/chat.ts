import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  choices?: { message: { content: string } }[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { prompt } = req.body
  if (!prompt) {
    res.status(400).json({ error: 'Missing prompt' })
    return
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      res.status(response.status).json({ error: errorData.error.message })
      return
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
