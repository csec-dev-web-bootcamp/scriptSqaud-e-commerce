import { useCart } from "@app/client/data/state";

function CheckOut () {
    const cartData = useCart((state) => state.cartProducts);

    return (
        <div className="container ">
          <h1 className="text-5xl m-5 p-4 border-b border-b-slate-500">Cart</h1>
          {cartData.map((product) => (
            <a
              href="#"
              key={product.id}
              class="flex  flex-col items-center m-10 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  sm:flex-row sm:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                <p className="mr-3">-</p>
                <Input className="w-10" type="text" placeholder="1" />
                <p className="ml-3">+</p>
              </div>
            </a>
          ))}
        </div>
      );
}
export default CheckOut