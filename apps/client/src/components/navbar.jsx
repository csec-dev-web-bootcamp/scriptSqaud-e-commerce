"use client";
import Link from "next/link";
import SideCart from "./sidecart";

import { useState } from "react";
import Profile from "./profile";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <div className=" flex top-0 bg-slate-50 m-0 items-center  justify-between p-3">
      <div className="text-md">
        <Link href="/Dashboard">Logo</Link>
      </div>
      <div className="  flex items-center justify-center ">
        <input
          type="text"
          className=" bg-gray-200 text-md border-b-2  border-slate-200  px-3 py-3    rounded-lg focus:outline-none"
          placeholder="Search..."
        />
        <select className="border-b-2 bg-gray-200 text-gray-500 border-slate-200  text-sm py-3 mx-2   rounded-lg   focus:outline-none">
          <option value="">All Category</option>
          <option value="category1"> women</option>
          <option value="category2">men</option>
          <option value="category3">electronic</option>
        </select>
        <button className="bg-gray-500 hover:bg-gray-900  text-white text-sm font-bold px-4 py-3 rounded-lg   focus:outline-none">
          Search
        </button>
      </div>
      <ul className="flex  font-thin text-xs space-x-3">
        <li onClick={toggleProfile} className="rounded flex flex-col items-center justify-center text-md">
          <img src="/user (2).png" alt="user" className="h-3" />
          <hl>Profile</hl>
          {isProfileOpen && <Profile />}
        </li>
        <li className="text-md flex flex-col items-center justify-center ">
          <img src="/shopping-bag.png" alt="shop" className="h-3" />
          <Link href="/shop">Shop</Link>
        </li>

        <li className="text-md flex flex-col items-center justify-center">
        <img src="/trolley.png" alt="user" className="h-3" />

          <SideCart />
        </li>
        <li className="text-md flex flex-col items-center justify-center">
          <img src="/like.png" alt="user" className="h-3" />
          <Link href="/checkout"> Orders </Link>
        </li>
      </ul>
    </div>
  );
}
