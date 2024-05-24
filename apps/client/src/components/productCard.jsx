"use client"
import { Button } from "./ui/button";

function ProductCard({ product, width }) {
  function setCart(id) {
    const product = products.filter((songs) => songs.id == id);
    addToCart(product[0]);
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
            <span className="text-sm text-slate-900 line-through">
              ${product.price}
            </span>
          </p>
        </div>
      </div>

      <Button
        onClick={() => setCart(product.id)}
        className="flex items-center justify-center rounded-md bg-slate-900 px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </Button>
    </div>
  );
}
export default ProductCard;
