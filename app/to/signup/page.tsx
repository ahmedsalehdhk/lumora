import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex gap-10'>
      <h1>Signup Functionality</h1>
      <Link href="/">Login instead</Link>
    </div>
  )
}

export default SignUp
