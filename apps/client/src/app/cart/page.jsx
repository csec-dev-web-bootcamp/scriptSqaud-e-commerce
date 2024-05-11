"use client"
import { useCart } from "@app/client/data/state";
import { Input } from "../../components/ui/input";
import { Button } from "@app/client/components/ui/button";

function Cart() {
  const cartData = useCart((state) => state.cartProducts);
  const addAmount = useCart((state) => state.addProductAmount);
 const minusAmount = useCart((state) => state.minusProductAmount)
  return (
    <div className="container ">
      <h1 className="text-5xl m-5 p-4 border-b border-b-slate-500">Cart</h1>
      {cartData.map((product) => (
        <div
          
          key={product.id}
          class="flex  flex-col items-center m-10 bg-white border-b border-gray-200   md:flex-row md:max-w-xl  sm:flex-row sm:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex mr-20 w-96">
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg sm:h-auto sm:w-48 sm:rounded-none sm:rounded-s-lg "
              src="vintage.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
          <p class=" font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </p>
          <div className=" ml-2 mr-10 flex flex-row justify-between items-center">
            <button className="mr-3" onClick={()=>minusAmount(product.id)}>-</button>
            <p>{product.amount}</p>
            <button className="ml-3" onClick={() => addAmount(product.id)}>+</button>
          </div>
        </div>
      ))}
      <Button className="m-8">Checkout</Button>
    </div>
  );
}
export default Cart;
