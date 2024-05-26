"use client";
import { getManyProducts } from "../../data/product.data";
import { useCart } from "../../data/state";
import { useGlobalState } from "../admincomponent/globalcontext/DataContext";
import StarRating from "./starRating";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";

function ProductCard({ product, width }) {
  const addToCart = useCart((state) => state.addToCart);
  function setCart(id) {
    addToCart(product);
  }
  return (
    <div
      className={`group ${width} flex  flex-col  overflow-hidden hover:bg-gray-100  bg-[#fffbf5] shadow-md `}
    >
      <a
        className="relative flex h-40 overflow-hidden  hover:bg-opacity-100 transition inset-0"
        href={`/shop/${product.id}`}
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={product.image}
          alt="product image"
        />
      </a>
      <div className="mt-4 ml-2 mb-2 ">
        <div className="flex items-center justify-between">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h5>
        </a>
        <Button className="bg-inherit hover:bg-inherit  rounded-r-md px-5 ">
          <FaRegHeart color="black" size={20} fill="red" />
        </Button>
        </div>
        <div className=" mb-1 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-slate-900 ml-2 line-through">
              ${product.price}
            </span>
          </p>
        </div>
        <StarRating keys={product.id} />
      </div>
      <div className="flex  w-full justify-center items-center">
        <Button
          onClick={() => setCart(product.id)}
          className="flex items-center justify-center   flex-grow rounded-md  bg-pink-950 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-900 focus:outline-none"
        >
          Add to cart
        </Button>
        
      </div>
    </div>
  );
}
export default ProductCard;
