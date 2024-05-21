"use client"
import Link from "next/link";
import SideCart from "./sidecart";
import Slide from "./slide";
import { useState } from "react";
import Profile from "./profile";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <div className=" flex  items-center border justify-between p-3">
      
        <div className="text-md">
          <Link href="/">Logo</Link>
        </div>
       < div className="  flex items-center justify-center ">
      <input
        type="text"
        className=" text-sm border  border-black pr-16  px-3 py-1  focus:outline-none"
        placeholder="Search..."
      
      />
      <select
        className="border border-black text-sm py-1   focus:outline-none"
        
      >
        <option value="">All Category</option>
        <option value="category1">  women</option>
        <option value="category2">men</option>
        <option value="category3">electronic</option>
      </select>
      <button
        className="bg-black hover:bg-black  text-white text-sm font-bold px-4 py-1   focus:outline-none"
        
      >
        Search
      </button>
    </div>
         <ul className="flex  font-thin text-xs space-x-3">
         <li  onClick={toggleProfile} className="rounded items-center text-md">
        <img src="/user (2).png" alt="user" className="h-3" />
          <hl>Profile</hl>
      {isProfileOpen && <Profile />}
          </li>
          <li className="text-md ">
          <img src="/shopping-bag.png" alt="shop" className="h-3" />
            <Link href="/shop">Shop</Link>
            </li>
    
        <li className="text-md ml-6 " >
          <SideCart />
        </li>
      <li className="text-md ">
      <img src="/like.png" alt="user" className="h-3" />
         <Link href="/checkout"> Orders </Link>
          </li>
      </ul>

    </div>
  );
}
