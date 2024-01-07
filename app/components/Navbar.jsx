import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.png'


export default function Navbar() {
  return (
    <div>
        <nav>
            <Image src={logo} alt="logo" width={70} quality={100}	placeholder='blur'></Image>
            <h1>Ticket Master</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}
