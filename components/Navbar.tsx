"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bebas_Neue } from "next/font/google";
import user from "@/public/assets/jennifer.jpg"

// Icons
import { House } from "@deemlol/next-icons";
import { Star } from "@deemlol/next-icons";
import { ShoppingBag } from "@deemlol/next-icons";

const bebasNueu = Bebas_Neue({
  subsets: ["latin"],
  weight: "400"
})

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='w-screen lg:w-72 sticky top-0 left-0 lg:static px-6 py-8 flex lg:flex-col justify-between items-center lg:items-baseline gap-1 shadow-sm bg-white'>
      <div className="w-full">
        <div className={`${bebasNueu.className} text-2xl lg:text-4xl cursor-pointer lg:mb-10`}>Lumora</div>
        <div className="nav-links hidden lg:flex flex-col gap-2 w-full">
          <Link className={pathname === '/home' ? "active-link-style" : "nav-link-items"} href='/home'><House size={24} />Home</Link>
          <Link className={pathname === '/quests' ? "active-link-style" : "nav-link-items"} href='/quests'><ShoppingBag size={24} />Quests</Link>
          <Link className={pathname === '/rewards' ? "active-link-style" : "nav-link-items"} href='/rewards'><Star size={24} />Rewards</Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <div className="image-container w-14 h-14 rounded-md overflow-hidden">
          <Image src={user} alt='user' />
        </div>
        <div className="">
          <h1 className='font-bold'>Jennifer Lawrence</h1>
          <Link className='text-neutral-400 hover:text-black' href='/'>Logout</Link>
        </div>
      </div>
      {/* MOBILE HAMBURGER */}
      <div className="hamburger flex lg:hidden flex-col gap-1 cursor-pointer">
        <div className="line bg-black h-0.5 w-7 rounded-full"></div>
        <div className="line bg-black h-0.5 w-7 rounded-full"></div>
      </div>
    </nav>
    // <nav className='sticky lg:static top-0 left-0 min-w-64 p-4 lg:p-6 shadow-sm bg-white flex lg:flex-col justify-between'>
    //   <div className="header flex flex-col justify-center">
    //     <div className={`${bebasNueu.className} text-2xl lg:text-4xl cursor-pointer lg:mb-10`}>Lumora</div>
    //     <div className="nav-links hidden w-full lg:flex flex-col gap-3">
    //       <Link className={pathname === '/home' ? "active-link-style" : "nav-link-items"} href='/home'><House size={24} />Home</Link>
    //       <Link className={pathname === '/quests' ? "active-link-style" : "nav-link-items"} href='/quests'><ShoppingBag size={24} />Quests</Link>
    //       <Link className={pathname === '/rewards' ? "active-link-style" : "nav-link-items"} href='/rewards'><Star size={24} />Rewards</Link>
    //     </div>
    //   </div>
    //   <div className="footer flex items-center lg:gap-3">
    //     <div className="user-icon h-12 w-12 rounded-lg cursor-pointer bg-gray-600"></div>
    //     <div className="name-logout">
    //       <h1 className='hidden lg:block font-medium cursor-pointer'>Jennifer Lawrence</h1>
    //       <Link href='/'><h1 className='hidden lg:block text-neutral-400 hover:text-black transition-colors text-sm cursor-pointer'>Logout</h1></Link>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
