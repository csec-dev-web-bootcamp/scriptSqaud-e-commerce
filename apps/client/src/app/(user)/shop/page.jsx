import ProductsPage from "@app/client/components/productList";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@app/client/components/ui/collapsible";
import { getManyProducts } from "../../../data/product.data";
const productData = await getManyProducts();

function Shop() {
  return (
    <div className="h-full  grid grid-cols-6 ">
      <div className="w-full m-8 mt-9 col-span-1">
        <h1 className="mx-auto text-xl font-semibold mb-3">Categories</h1>

        <Collapsible className="w-fit">
          <CollapsibleTrigger className="w-24  ">
            <div className=" border-b-2   py-2 text-lg w-full ">Shoes</div>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2 px-1">
            <div>Nike Air</div>
            <div>Jordan 4</div>
            <div>Jordan 5</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="w-24">
            <div className="border-b-2  py-2 text-lg  ">Shirt</div>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-1 ">
            <div>Lacoste</div>
            <div>Calvin klein </div>
            <div>Guci</div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="col-span-5 border-l-2 py-5 *:px-10">
        <ProductsPage products={productData} />
      </div>
    </div>
  );
}
export default Shop;
