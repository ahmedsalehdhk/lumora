'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentPath = usePathname()
  console.log(currentPath)
  
  const links = [
    {label: 'Home', href: '/'},
    {label: 'Quests', href: '/quests'},
    {label: 'Rewards', href: '/rewards'},
    {label: 'Profile', href: '/profile'},
    {label: 'Login', href: '/login'},
  ]

  return (
    <nav className='bg-purple-400 p-2 mb-5'>
        <ul className="nav-links space-x-5">
          {links.map((link) => {
            return <Link 
            key={link.href} 
            href={link.href}
            className={`${link.href === currentPath ? 'text-white' : 'text-black'} hover:text-white`}
            >{link.label}</Link>
          })}
        </ul>
    </nav>
  )
}

export default Navbar
