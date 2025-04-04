"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import NavIcon from "./NavIcon";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="h-16 bg-[#fccc4a] text-black px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64 shadow-md fixed top-0 w-full z-50 flex items-center justify-between">
      {/* Mobile View */}
      <div className="md:hidden flex items-center justify-between w-full">
        <Link href="/" className="font-extrabold text-lg">DX-SHOP</Link>
        <Menu />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo_cart.png" alt="Logo" width={28} height={28} /> */}
            <span className="text-lg font-extrabold">D(x)</span>
          </Link>

          <nav className="hidden xl:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gray-700 transition">Home</Link>
            <Link href="/products" className="hover:text-gray-700 transition">Products</Link>
            <Link href="/about" className="hover:text-gray-700 transition">About Us</Link>
            <Link href="/contact" className="hover:text-gray-700 transition">Contact</Link>
          </nav>
        </div>

        {/* Right Side: Search & Icons */}
        <div className="flex items-center gap-6">
          <Searchbar />
          <NavIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
