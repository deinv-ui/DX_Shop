import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const isLoggedIn = useState(false);
  const handleProfile = () => {
    if(!isLoggedIn){
        router.push("/login")
    }
    setIsProfileOpen((prev) => !prev)
  }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleProfile}
      ></Image>
      { isProfileOpen && <div className="absolute bg-white p-3 rounded-md 
      shadow-[0_3px_10px_rgb(0,0,0,0.2)] top-12 text-sm z-20">
        <Link href="/">Profile</Link>
        <div className="cursor-pointer mt-2">Log Out</div>
        </div>}
      <Image
        src="/notification.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
      ></Image>
      <div className="relative cursor-pointer">

      <Image
        src="/cart.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
        ></Image>
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-noti rounded-full text-white">2</div>
        </div>
      {
        isCartOpen && <div className="absolute flex items-center gap-3 bg-white">
          <CartModal/>
        </div>
      }
    </div>
  );
};

export default NavIcon;
