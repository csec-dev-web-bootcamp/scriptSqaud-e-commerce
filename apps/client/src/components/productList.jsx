"use client";
import { useCart } from "../data/state";
import ProductCard from "./productCard";
import { Button } from "./ui/button";

const ProductsPage = ({ products }) => {
  const addToCart = useCart((state) => state.addToCart);

  
  return (
    <div className="   ">
      <h1 className="text-3xl text-pink-950 font-semibold p-10 ml-16 ">Latest Products</h1>

      <ul className="grid grid-cols-4 ml-24 align-middle gap-7 w-5/6  mb-3">
        {products.map((product) => (
          <li
            key={product.id}
            className=" flex flex-col w-fit ml-2 shadow-sm justify-center rounded-md "
          >
            <ProductCard product={product}  width={"w-72"} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
