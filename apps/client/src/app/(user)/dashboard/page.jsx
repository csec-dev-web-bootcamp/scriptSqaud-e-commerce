import ProductsPage from "../../../components/productList";
import { getManyProducts } from "../../../data/product.data";
import Carousel from "../../../components/DemoSlider";

const produc = await getManyProducts();
const DATA = produc?.map((data) => data.image);

export default function Page() {
  return (
    <main className="bg-slate-50">
      <Carousel data={DATA} />
      <div class="my-10">
        <div class="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div class="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="/icons/delivery-van.svg"
              alt="Delivery"
              class="w-12 h-12 object-contain"
            />
            <div>
              <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
              <p class="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div class="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="/icons/money-back.svg"
              alt="Delivery"
              class="w-12 h-12 object-contain"
            />
            <div>
              <h4 class="font-medium capitalize text-lg">Money Returns</h4>
              <p class="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div class="border border-slate-900 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="/icons/service-hours.svg"
              alt="Delivery"
              class="w-12 h-12 object-contain"
            />
            <div>
              <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
              <p class="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div class="grid grid-cols-3 gap-3">
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-1.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-2.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-3.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
                </a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-4.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-5.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
                    Room</a>
            </div>
            <div class="relative rounded-sm overflow-hidden group">
                <img src="/category/category-6.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</a>
            </div>
        </div>
    </div>
      <ProductsPage products={produc} />
      {/* <Cart /> */}
    </main>
  );
}
