import { useEffect, useState } from 'react'

type InternData = {
  name: string
  referralCode: string
  totalDonations: number
}

export default function Dashboard() {
  const [data, setData] = useState<InternData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    async function fetchData() {
      const res = await fetch('/api/intern')
      const json = await res.json()
      setData(json)
      setLoading(false)
    }
    fetchData()
    intervalId = setInterval(fetchData, 5000) // Poll every 5 seconds
    return () => clearInterval(intervalId)
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="container">
      <h1>Intern Dashboard</h1>
      <p><strong>Intern Name:</strong> {data?.name}</p>
      <p><strong>Referral Code:</strong> {data?.referralCode}</p>
      <p><strong>Total Donations Raised:</strong> ${data?.totalDonations.toLocaleString()}</p>

      <section style={{ marginTop: 40 }}>
        <h2>Rewards / Unlockables</h2>
        <ul>
          <li>Reward 1: Certificate of Completion</li>
          <li>Reward 2: Exclusive Webinar Access</li>
          <li>Reward 3: Internship Badge</li>
        </ul>
      </section>
    </div>
  )
}
