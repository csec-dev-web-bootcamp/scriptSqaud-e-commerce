import ProductsPage from "../components/productList";
import { getManyProducts} from "../data/product";
import Carousel from "../components/DemoSlider";

const produc = await getManyProducts()
const DATA = produc?.map((data) => data.image)

export default function Page() {
    
    return (
        <main  className="">
            <Carousel data={DATA} />
            <h1 className="text-xl font-semibold p-3">Latest Products</h1>
            <ProductsPage products ={produc}  />
            {/* <Cart /> */}
        </main>
    );
};

