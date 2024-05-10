// import Cart from "../components/Cart";
import Cart from "../components/Cart";
import ProductsPage from "../components/productList";
import SideCart from "../components/sidecart";
import productsData from '../data/products.json';

// import NavBar from "../components/navbar";


export default function Page() {
    return (
        <main className="container">
            <ProductsPage products={productsData}/>
            {/* <Cart /> */}
        </main>
    );
}
