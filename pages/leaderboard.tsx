export default function Leaderboard() {
  const leaderboard = [
    { name: 'Alice', donations: 15000 },
    { name: 'Bob', donations: 12000 },
    { name: 'Charlie', donations: 9000 },
    { name: 'Diana', donations: 7000 },
    { name: 'Eve', donations: 5000 },
  ]

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ textAlign: 'right' }}>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td style={{ textAlign: 'right' }}>${entry.donations.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
