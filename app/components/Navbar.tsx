import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 p-2 mb-5'>
        <div className="nav-links space-x-5">
            <Link href="/">Home</Link>
            <Link href="/quests">Quests</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar
