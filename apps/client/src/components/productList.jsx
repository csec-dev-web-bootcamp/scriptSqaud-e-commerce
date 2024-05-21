"use client"
import { useCart } from "../data/state";
import productData from "../data/products";
import { Button } from "./ui/button";
import Link from "next/link";
import Carousel from "./DemoSlider";

const ProductsPage = ( { products }) => {

  
      
 
    const addToCart = useCart((state) => state.addToCart);
    function setCart(id) {
      const product = products.filter((songs) => songs.id == id)
      addToCart(product[0])

    }
    return (
        <div>
            
            <h1 className="text-xl font-semibold p-3">Latest Products</h1>
            <ul className=" grid grid-cols-4 ">
                 {productData.map((product) => (
                    <li
                        key={product.id}
                        className=" productcard flex flex-col m-2 justify-center border border-slate-200 rounded-md p-2"
                    >
                        {/* Import and use the image for each product */}
                         <Link href={`/detail/${product.id}`}>
                          <img src={product.image} alt="" className="w-64 h-36 transition duration-300 transform hover:scale-125" />
                          <p>${product.price}</p>
                          <h2>{product.name}</h2>
                          <p className=" font-thin text-sm">{product.description}</p>
                         </Link >
                        <Button onClick={()=> setCart(product.id)} className="p-2">Add To Cart</Button>

                        {/* Add more product information */}
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default ProductsPage;

