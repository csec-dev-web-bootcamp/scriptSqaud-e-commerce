"use client";
import Link from "next/link";
import SideCart from "./sidecart";

import { useState } from "react";
import Profile from "./profile";
import { cookies } from "next/headers";

export default function NavBar() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  return (
    <nav className=" flex flex-col top-0 bg-slate-50 m-0 items-center  justify-between ">
      <div className="flex flex-row justify-between items-center w-full py-2">
        <div className="font-extrabold text-pink-800  text-lg mx-10">
          <Link href="/dashboard">SSECOMMERCE</Link>
        </div>
        <div className=" flex items-center justify-center  ">
          <input
            type="text"
            className=" bg-gray-200  border-b-2  border-slate-200  px-3 py-3    rounded-lg focus:outline-none"
            placeholder="Search..."
          />
          <select className="border-b-2 bg-gray-200 text-gray-500 border-slate-200  text-sm py-3 mx-2   rounded-lg   focus:outline-none">
            <option value="">All Category</option>
            <option value="category1"> women</option>
            <option value="category2">men</option>
            <option value="category3">electronic</option>
          </select>
          <button className="bg-pink-800 hover:bg-pink-900  text-white text-sm font-bold px-4 py-3 rounded-lg   focus:outline-none">
            Search
          </button>
        </div>
        <ul className="flex  font-thin text-xs px-5 space-x-5">
          <li
            onClick={toggleProfile}
            className="rounded flex flex-col items-center justify-center "
          >
            <img src="/user (2).png" alt="user" className="h-3" />
            <hl>Profile</hl>
            {isProfileOpen && <Profile />}
          </li>

          <li className=" flex flex-col items-center justify-center">
            <img src="/trolley.png" alt="user" className="h-3" />

            <SideCart />
          </li>
          <li className=" flex flex-col items-center justify-center">
            <img src="/like.png" alt="user" className="h-3" />
            <Link href="/checkout"> Orders </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-slate-800 w-full flex-grow m-0  ">
        <div className="flex items-center capitalize ">
          <a
            href="/dashboard"
            className="text-white p-4 text-base font-semibold  hover:text-white hover:bg-pink-800 transition"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-pink-800 transition"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-pink-800 transition"
          >
            About us
          </a>
          <a
            href="#"
            className="text-white font-semibold text-base p-4   hover:text-white hover:bg-pink-800 transition"
          >
            Contact us
          </a>
        </div>
       { accessToken ? (<div>
          <a
            href="/login"
            className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-pink-900 transition"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-pink-900 transition"
          >
            Sign Up
          </a>
        </div>) : <button
            
            className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-pink-900 transition"
          >
            Log Out
          </button>}
      </div>
    </nav>
  );
}
