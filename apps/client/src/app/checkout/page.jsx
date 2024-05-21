"use client";
import { useCart } from "@app/client/data/state";
import Image from "next/image";

function CheckOut() {
  const cartData = useCart((state) => state.cartProducts);
  const total = cartData.map((data) => data.price).reduce((total, val)=> (total + val), 0)
  return (
    
      <div className="grid gap-5 sm:px-10 lg:grid-cols-2 lg:px-20 h-full xl:px-22">
        <div className="px-4 pt-8">
          <p className="text-3xl font-medium">Order Summary</p>
          <p className="text-gray-400 border-b border-blue-100 py-3">
            Check your items.
          </p>
          <div className="mt-8 space-y-3   bg-white px-2 py-4 sm:px-6">
            {cartData.map((data) => (
              <div className="flex flex-col border-b-2 bg-white sm:flex-row">
                <img
                  className="m-2 h-24 w-28 "
                  src={data.image}
                  alt={data.image}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{data.name}</span>

                  <p className="text-lg font-bold">${data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 px-4 pt-8 lg:mt-0">
          <p className="text-3xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className=" ">
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="flex flex-row border-b-2 border-b-gray-200 items-center">
              <Image width="20" height="20" src="/icons/mail.png" />
              <input
                type="text"
                id="email"
                name="email"
                className="w-full pl-3 py-3  text-sm outline-none focus:z-1 focus:z-10 focus:border-b-2 focus:border-b-blue-500 hover:border-b-blue-500"
                placeholder="example@gmail.com"
              />
            </div>
            <label
              for="fullName"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Full Name
            </label>
            <div className="flex flex-row items-center border-b-2 border-gray-200 ">
              <Image
                className="h-7 focus:border-b-blue-200"
                width="24"
                height="5"
                src="/icons/person.png"
              />
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 pl-3 text-sm   outline-none focus:z-10 focus:border-b-2 focus:border-b-blue-500 hover:border-b-blue-500"
                placeholder="Full name here"
              />
            </div>

            <label
              for="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-row items-center sm:w-7/12  border-b border-b-gray-200">
              <Image
                className="h-6 focus:border-b-blue-200 "
                width="24"
                height="51"
                src="/icons/address.png"
              />
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full  border-b border-b-gray-200 px-4 py-3 pl-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500"
                  placeholder="Street Address"
                />
                
              </div>
              <select
                type="text"
                name="billing-state"
                className="w-full  border-b border-b-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-b-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 border-b border-b-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-b-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">${total.toPrecision(4)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$0.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">${total.toPrecision(4)}</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    
  );
}
export default CheckOut;
