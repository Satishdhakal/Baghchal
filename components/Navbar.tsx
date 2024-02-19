"use client"
import Image from "next/image"
import Link from "next/link"

// I have reved the onClick 
// because this function will be handle from content
// so no need to worry about this now

const Navbar = () => {
  return (
    <div className="relative z-20 bg-slate-900 h-20">
      <Image
      src="/tiger-logo.png"
      width={60}
      height={60}
      alt="Picture of tiger"
      className="mx-96 py-2 hover:cursor-pointer"
    />

    <ul className="">
      <Link href="/" className="relative left-2/3 bottom-12">HOME</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="/rules" className="relative left-2/3 bottom-12">RULES</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="/contact" className="relative left-2/3 bottom-12">CONTACT</Link>
    </ul>
      
    </div>
  )
}

export default Navbar