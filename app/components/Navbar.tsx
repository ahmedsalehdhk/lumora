import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 p-2 mb-5'>
        <div className="nav-links space-x-5">
            <Link href="/">Home</Link>
            <Link href="/routes/quests">Quests</Link>
            <Link href="/routes/rewards">Rewards</Link>
            <Link href="/routes/profile">Profile</Link>
            <Link href="/routes/login">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar
