"use client"
import { productData } from "@app/client/data/product";
import { getOneProduct } from "@app/client/data/product.data";
import Image from "next/image";
import { useEffect, useState } from "react";

function ProductDetail(props) {

  const params = props.params;
  const [product, setProduct] = useState([])
  useEffect(()=> {
    setProduct(getOneProduct(params))
  },[])
  // const product = productData?.filter((data) => {
  //   if (parseInt(data.id) === parseInt(params.productId)) console.log(data.id);
  //   return parseInt(data.id) === parseInt(params.productId);
  // });

  return (
    <div className="font-sans">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <Image
              src={`/${product.image}`}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-800">
              {product?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">
                ${product?.price}
              </p>
              
            </div>

            <div className="flex space-x-2 mt-4">
              <svg
                className="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  SM
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  MD
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  LG
                </button>
                <button
                  type="button"
                  className="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                >
                  XL
                </button>
              </div>
              <button
                type="button"
                className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800">
                About the item
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>
                  {product.description}
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
