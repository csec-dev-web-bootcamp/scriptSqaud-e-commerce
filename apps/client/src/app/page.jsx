

import ProductsPage from "../components/productList";
import productsData from "../data/products.json";

// import NavBar from "../components/navbar";

export default function Page() {
  return (
    <main className="container">
      <ProductsPage products={productsData} />
    </main>
  );
}
