import type { NextApiRequest, NextApiResponse } from 'next'

type InternData = {
  name: string
  referralCode: string
  totalDonations: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InternData>
) {
  // Return dummy intern data
  res.status(200).json({
    name: 'John Doe',
    referralCode: 'johndoe2025',
    totalDonations: 12345,
  })
}
