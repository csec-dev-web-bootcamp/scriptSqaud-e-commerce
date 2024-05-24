"use client";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useCart } from "../data/state";
import Link from "next/link";

export default function SideCart() {
  const cartData = useCart((state) => state.cartProducts);
  const removeFromCart = useCart((state) => state.removeFromCart);
  function delCart(id) {
    removeFromCart(id);
  }
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <p>Cart</p>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription className="mb-5">Your Options</SheetDescription>
        </SheetHeader>
        {cartData?.map((product) => (
          <div key={product.id}>
            <Card className="flex  flex-col overflow-y-auto">
              <button
                onClick={() => delCart(product.id)}
                className="ml-auto mr-5 mt-1"
              >
                X
              </button>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.price}</p>
              </CardContent>
            </Card>
          </div>
        ))}

        <SheetFooter>
          <div className="flex flex-col items-center w-full m-5">
            <SheetClose asChild>
              <Link href="/cart">
                <Button className=" flex m-3 border p-3 text-sm w-64 justify-center  text-slate-100 font-bold rounded-md bg-gray-500">
                  View Cart
                </Button>
              </Link>
            </SheetClose>
            <Button className="flex w-64 ">Checkout</Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
