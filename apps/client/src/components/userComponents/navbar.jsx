"use client";
import Link from "next/link";
import SideCart from "./sidecart";
import { useState } from "react";
import Profile from "./profile";
import useMutation from "../../hooks/use-mutation";
import { deleteAuthentication } from "../../data/auth/authentications";
import { useCart } from "@app/client/data/state";

export default function NavBar({ session, categories }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const { isMutating, startMutation } = useMutation();
  const cartData = useCart((state) => state.cartProducts);
  return (
    <nav className=" flex flex-col top-0 bg-slate-50 m-0 items-center  justify-between ">
      <div className="flex flex-row justify-between  bg-orange-50 items-center w-full py-3">
        <div className="font-extrabold text-pink-950 font-openSans text-xl mx-10">
          <Link href="/dashboard">SSECOMMERCE</Link>
        </div>
        <div className=" flex items-center justify-center   ">
          <input
            type="text"
            className=" bg-gray-200  text-base   border-slate-200  px-5 py-2 focus:outline-none"
            placeholder="Search..."
          />
          <select className=" bg-gray-200 text-gray-500 border-slate-200  text-base py-2 px-5   focus:outline-none">
            <option value="">All Category</option>
            {categories.map((data) => (
              <option value={data.id}> {data.name}</option>

            ))}
            
          </select>
          <button className="bg-pink-950 hover:bg-slate-900  text-white text-base font-bold px-5 py-2   focus:outline-none">
            Search
          </button>
        </div>
        <ul className="flex  font-thin text-xs px-5 space-x-5">
          <li
            onMouseEnter={toggleProfile}
            onMouseLeave={toggleProfile}
            className=" flex flex-col items-center justify-center cursor-pointer"
          >
            <Profile user={session} />
          </li>

          <li className=" flex flex-col items-center justify-center cursor-pointer">
            <SideCart />
            {cartData && (

            <div class="absolute top-4 right-14 w-3 h-3 p-[0.4rem] rounded-full flex items-center justify-center bg-pink-800 text-white text-xs">
              {cartData.length}
            </div>
            )}
          </li>
          <li className=" flex flex-col items-center justify-center cursor-pointer">
            
            <Link href="/checkout"><img src="/like.png" alt="user" className="h-[1.4rem]" /></Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between bg-pink-950 w-full flex-grow m-0  ">
        <div className="flex items-center capitalize ">
          <a
            href="/dashboard"
            className="text-white p-4 text-base font-semibold  hover:text-white hover:bg-slate-900 transition"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-slate-800 transition"
          >
            Shop
          </a>
          <a
            href="/about"
            className="text-white font-semibold text-base p-4 hover:text-white hover:bg-slate-800 transition"
          >
            About us
          </a>
          <a
            href="/contact"
            className="text-white font-semibold text-base p-4   hover:text-white hover:bg-slate-800 transition"
          >
            Contact us
          </a>
        </div>
        {session.error ? (
          <div>
            <a
              href="/login"
              className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-slate-900 transition"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-slate-900 transition"
            >
              Sign Up
            </a>
          </div>
        ) : (
          <button
            className="text-white font-semibold =text-base p-4 hover:text-white hover:bg-slate-900 transition"
            onClick={() =>
              startMutation(async () => {
                await deleteAuthentication();
              })
            }
            disabled={isMutating}
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
