"use client";
import { useCart } from "@app/client/data/state";
import { BsCartPlus } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

function WishList() {
  const wishListData = useCart((state) => state.wishListProducts);
  const [color, setColor] = useState(false);
  const removeFromWishList = useCart((state) => state.removeFromWishList);
  const total = wishListData.length
  const addToCart = useCart((state) => state.addToCart);

  function setCart() {
    setColor((prev) => !prev)
    addToCart(product);
  }

  return (
    <div className="container h-full ">
      <h1 className="text-5xl w-full m-5 p-4 border-b border-b-slate-500 ">
        Wishlist
      </h1>
      <div className="h-screen">
        {total > 0 ? (<div> you have { total } items in your wish list</div>) : (
          <div className="text-lg p-4 m-5">
            You have no items in your wish list
          </div>
        )}
        <div>
          {wishListData.map((product) => (
            <div
              key={product.id}
              className="flex flex-row justify-between  w-full items-center  m-5 bg-inherit border-b border-gray-200 "
            >
              <Image
                width="1000"
                height="1000"
                className=" min-w-24 w-24 max-h-24 "
                src={`/${product.image}`}
                alt={product.image}
              />
              <div className="flex flex-col justify-center  items-start    leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {product.name}
                </h5>
                <p className=" font-sm w-24 text-gray-400 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
              <p className=" font-sans font-semibold text-lg  text-gray-700 dark:text-gray-400">
                ${product.price}
              </p>
              <BsCartPlus size={24} color={color && "red"} onClick={() => setCart()}/>
              <button
                className="mr-16 text-xl "
                onClick={() => removeFromWishList(product.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default WishList;
