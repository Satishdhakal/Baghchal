"use client";
import Image from "next/image";
import Link from "next/link";

// I have reved the onClick
// because this function will be handle from content
// so no need to worry about this now

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-20 z-20 bg-slate-900 px-[12%]">

      <div className="flex items-center justify-between">
        <Image
          src="/tiger.png"
          width={70}
          height={70}
          alt="Picture of tiger"
          className="hover:cursor-pointer"
        />

        <div>

          <Link href="/" className="p-2 hover:text-orange-400">
            HOME
          </Link>

          <Link href="/rules" className="p-2 hover:text-orange-400">
            RULES
          </Link>

          <Link href="/contact" className="p-2 hover:text-orange-400">
            CONTACT
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Navbar;
