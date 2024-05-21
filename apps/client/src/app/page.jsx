import ProductsPage from "../components/productList";
// import SideCart from "../components/sidecart";
import { getManyProducts} from "../data/product";
import Carousel from "../components/DemoSlider";
const productData = await getManyProducts()
const DATA = productData.map((data) => data.image)
console.log(DATA)
// import NavBar from "../components/navbar";

export default function Page() {
    
    return (
        <main  className="">
            <Carousel data={DATA} />
            <ProductsPage products ={productData}  />
            {/* <Cart /> */}
        </main>
    );
};

