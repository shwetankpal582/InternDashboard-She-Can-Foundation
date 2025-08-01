import Link from 'next/link'

export default function Home() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Welcome to the Intern Portal</h1>
      <p>
        <Link href="/login" style={{ fontSize: 18, color: 'blue', textDecoration: 'underline' }}>
          Go to Login / Signup
        </Link>
      </p>
    </div>
  )
}
