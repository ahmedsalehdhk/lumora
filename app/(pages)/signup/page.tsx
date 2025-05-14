import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
      <h1>Signup here</h1>
      <h1>or <Link href="/login" className="text-blue-700 hover:underline">Login</Link> instead</h1>
    </div>
  )
}

export default Signup
