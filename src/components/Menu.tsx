"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {/* If open is true show the menu */}
  {    open && (
      <div className="absolute bg-white text-black border-2 p-5 border-black border-solid 
      left-0 top-40 w-full h-[calc(100vh-160px)] flex flex-col items-center justify-start text-xl z-100 gap-10">
        <Link href="/">Home</Link>
        <Link href="/">Products</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
      </div>
      )}
    </div>
  );
};

export default Menu;
