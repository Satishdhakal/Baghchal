"use client"
import Image from "next/image"
import Link from "next/link"
import { redirect } from 'next/navigation'
const Navbar = () => {
  return (
    <div className="relative z-20 bg-slate-900 h-20">
      <Image
      src="/tiger-logo.png"
      width={70}
      height={70}
      alt="Picture of tiger"
      className="mx-96 py-2 hover:cursor-pointer"
      onClick={()=>{redirect('/')}}
    />

    <ul className="">
      <Link href="/" className="relative left-2/3 bottom-16">HOME</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="/contact" className="relative left-2/3 bottom-16">CONTACT</Link>
      
    </ul>
      
    </div>
  )
}

export default Navbar