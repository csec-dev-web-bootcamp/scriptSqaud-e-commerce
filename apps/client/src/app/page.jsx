



import ProductsPage from "../components/productList";

import { productData } from "../data/products";
import Carousel from "../components/DemoSlider";

const DATA = [
  { image: '/cloth.jpg' },
  { image: '/elec.jpg'},
  { image: '/brand.webp'},
]


// import NavBar from "../components/navbar";

export default function Page() {

    
  
    return (
        <main  className="container">
            <Carousel data={DATA} />
            <ProductsPage products ={productData}  />
            {/* <Cart /> */}
        </main>
    );
};

