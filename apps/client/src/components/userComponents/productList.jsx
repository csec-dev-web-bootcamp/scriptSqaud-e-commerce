"use client";
import { useFilter } from "@app/client/data/filter";
import ProductCard from "./productCard";
import { useEffect } from "react";
import { useGlobalState } from "@app/client/data/globalState";

const ProductsPage = ({ products }) => {
  const setProducts = useGlobalState((state) => state.setProducts);
  useEffect(() => {
    setProducts(products);
  });
  return (
    <div className="   ">
      <h1 className="text-3xl text-pink-950 font-semibold p-10 ml-16 ">
        Latest Products
      </h1>

      <ul className="grid grid-cols-4 ml-24 align-middle gap-7 w-5/6  mb-3">
        {products.map((product) => (
          <li
            key={product.id}
            className=" flex flex-col w-fit ml-2 shadow-sm justify-center rounded-md "
          >
            <ProductCard product={product} width={"w-[19rem]"} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
