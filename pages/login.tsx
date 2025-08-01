import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dummy login: redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <div className="container" style={{ maxWidth: 400, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Intern Portal Login/Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Login / Signup</button>
      </form>
    </div>
  )
}
