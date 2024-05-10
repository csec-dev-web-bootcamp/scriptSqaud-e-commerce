"use client";
import { useCart } from "../data/state";
import { productData } from "../data/product";
import { Button } from "./ui/button";

const ProductsPage = ({ products }) => {
    const addToCart = useCart((state) => state.addToCart);
    function setCart(id) {
      const product = products.filter((songs) => songs.id == id)
      addToCart(product[0])

    }
    return (
        <div>
            <h1>Products</h1>
            <ul className=" grid grid-cols-3 ">
                {products?.map((product) => (
                    <li
                        key={product.id}
                        className="  flex flex-col m-2 justify-center border border-slate-200 rounded-md p-2"
                    >
                        {/* Import and use the image for each product */}
                        <img src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <Button onClick={()=> setCart(product.id)}>Add To Cart</Button>

                        {/* Add more product information */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
