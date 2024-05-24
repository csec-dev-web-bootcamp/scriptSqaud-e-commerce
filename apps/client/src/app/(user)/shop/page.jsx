import { getManyCategories } from "@app/client/data/catagory.data";
import { getManyProducts } from "../../../data/product.data";
import ProductCard from "@app/client/components/productCard";
const products = await getManyProducts();
const categories = await getManyCategories()
function Shop() {
  return (
    <div className="h-full  grid grid-cols-6 ">
      <div className="w-full m-8 mt-9 col-span-1">
        <div class=" w-fit bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
            <div class="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    <div class="space-y-2">
                        {categories.map((category) => (

                        <div class="flex items-center">
                            <input type="checkbox" name="cat-1" id="cat-1"
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="cat-1" class="text-gray-600 ml-3 cusror-pointer">{category.name}</label>
                            <div class="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        ))}
                        
                    </div>
                </div>

               

                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div class="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min"/>
                        <span class="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max"/>
                    </div>
                </div>

                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                    <div class="flex items-center gap-2">
                        <div class="size-selector">
                            <input type="radio" name="size" id="size-xs" class="hidden"/>
                            <label for="size-xs"
                                class="text-xs border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                        </div>
                        <div class="size-selector">
                            <input type="radio" name="size" id="size-sm" class="hidden"/>
                            <label for="size-sm"
                                class="text-xs border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                        </div>
                        <div class="size-selector">
                            <input type="radio" name="size" id="size-m" class="hidden"/>
                            <label for="size-m"
                                class="text-xs border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                        </div>
                        <div class="size-selector">
                            <input type="radio" name="size" id="size-l" class="hidden"/>
                            <label for="size-l"
                                class="text-xs border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                        </div>
                        <div class="size-selector">
                            <input type="radio" name="size" id="size-xl" class="hidden"/>
                            <label for="size-xl"
                                class="text-xs border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                        </div>
                    </div>
                </div>

                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                    <div class="flex items-center gap-2">
                        <div class="color-selector">
                            <input type="radio" name="color" id="red" class="hidden"/>
                            <label for="red"
                                class="border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{"background-color": "#fc3d57"}}></label>
                        </div>
                        <div class="color-selector">
                            <input type="radio" name="color" id="black" class="hidden"/>
                            <label for="black"
                                class="border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{"background-color": "#000"}}></label>
                        </div>
                        <div class="color-selector">
                            <input type="radio" name="color" id="white" class="hidden"/>
                            <label for="white"
                                class="border border-gray-200 hover:bg-slate-500 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{"background-color": "#fff"}}></label>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>

      <div className="col-span-5 ">
        <h1 className="mt-6 p-3 ml-28  text-2xl font-semibold">Products</h1>
      <ul className="grid grid-cols-4 ml-24 align-middle gap-7 w-5/6  mb-3">
        {products.map((product) => (
          <li
            key={product.id}
            className=" flex flex-col w-fit ml-2 shadow-sm justify-center rounded-md "
          >
            <ProductCard product={product} width={"w-64"} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
export default Shop;
