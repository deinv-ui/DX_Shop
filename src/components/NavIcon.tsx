"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center gap-5 relative">
      {/* Profile Icon & Dropdown */}
      <div className="relative">
        <div
          className="flex items-center justify-center w-5 h-5 cursor-pointer rounded-full hover:bg-gray-100 transition"
          onClick={handleProfile}
        >
          <Image src="/profile.png" alt="Profile" width={20} height={20} />
        </div>
        {isProfileOpen && (
          <div className="absolute right-0 mt-3 w-40 bg-white p-3 rounded-lg shadow-lg text-sm z-20 border border-gray-200">
            <Link href="/" className="block py-2 px-3 hover:bg-gray-100 rounded-md transition">
              Profile
            </Link>
            <div
              className="cursor-pointer py-2 px-3 hover:bg-gray-100 rounded-md transition"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </div>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <div className="relative">
        <div className="flex items-center justify-center w-5 h-5 cursor-pointer rounded-full hover:bg-gray-100 transition">
          <Image src="/notification.png" alt="Notifications" width={20} height={20} />
        </div>
        <span className="absolute -top-3 -right-2 w-5 h-5 bg-red-500 text-xs font-bold text-white rounded-full flex items-center justify-center">
          3
        </span>
      </div>

      {/* Cart Icon & Badge */}
      <div className="relative cursor-pointer">
        <div
          className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-gray-100 transition"
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <Image src="/cart.png" alt="Cart" width={20} height={20} />
        </div>
        <span className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 text-xs font-bold text-white rounded-full flex items-center justify-center">
          2
        </span>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="absolute top-12 right-0 z-30">
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcon;
