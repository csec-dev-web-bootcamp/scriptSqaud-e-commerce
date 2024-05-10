import { useCart } from "../data/state";
import { Input } from "./ui/input"
 
function Cart() {
  const cartData = useCart((state) => state.cartProducts);

    return (
        <div className="container ">
            <h1 className="text-5xl m-5 p-4 border-b border-b-slate-500">
                Cart
            </h1>
            
        </div>
    );
}
export default Cart;
