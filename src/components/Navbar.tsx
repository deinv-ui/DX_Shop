"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import NavIcon from "./NavIcon";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <div className="h-20 bg-[#fccc4a] text-black px-6 py-[5rem] md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile view */}
      <div className="md:hidden h-full flex items-center justify-between">
        <div className="text-xl tracking-wide font-extrabold font-sans">
          <Link href="/">DX-SHOP</Link>
        </div>
        <Menu />
      </div>
      {/* Bigger Screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-2">
          <Image src="/logo_cart.png" alt="" width={24} height={24}></Image>
            <div className="text-xl tracking-wide font-extrabold font-sans">
              DX-SHOP
            </div>
          </Link>
        </div>
        {/* Right Side */}
        <div className="w-2/3 flex items-center justify-between gap-8">
        <Searchbar/>
        <NavIcon/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
