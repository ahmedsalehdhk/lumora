import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      Login here
      <h1>or <Link href="/routes/signup" className="text-blue-700 hover:underline">Signup</Link> instead</h1>
    </div>
  )
}

export default Login
