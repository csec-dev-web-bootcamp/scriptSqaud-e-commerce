"use client"
import { getManyProducts } from "../data/product.data";
import { useCart } from "../data/state";
import { useGlobalState } from "./admincomponent/globalcontext/DataContext";
import StarRating from "./starRating";
import { Button } from "./ui/button";

function ProductCard({ product, width }) {
  
 
  const addToCart = useCart((state) => state.addToCart)
  function setCart(id) {
   
    addToCart(product);
  }
  return (
    <div className={`group ${width} flex  flex-col p-5 overflow-hidden rounded-lg bg-gray-100 border border-gray-100 shadow-md`}>
      <a
        className="relative  mt-3 flex h-40 overflow-hidden rounded-xl"
        href={`/shop/${product.id}`}
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={product.image}
          alt="product image"
        />

       </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name}
          </h5>
        </a>
        <div className="mt-2 mb-1 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-slate-900 ml-2 line-through">
              ${product.price}
            </span>
          </p>
        </div>
      <StarRating />
      </div>
      <Button
        onClick={() => setCart(product.id)}
        className="flex items-center justify-center rounded-md bg-pink-950 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        
        Add to cart
      </Button>
    </div>
  );
}
export default ProductCard;
