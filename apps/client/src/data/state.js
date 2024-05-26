import { create } from "zustand";

export const useCart = create((set) => ({
  cartProducts: [],
  wishListProducts: [],
  
  addToWishList: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newProduct = {
        ...product,
        totalPrice: product.price,
        amount: 1,
      }
      const inWishList = currentState.wishListProducts.find((data) => data.id == newProduct.id)
      
      if (!inWishList)
        currentState.wishListProducts.push(newProduct);
      else {
        currentState.wishListProducts = currentState.wishListProducts.filter(
          (data) => data.id !== product.id
        )
      }
      return currentState;
    }),

  removeFromWishList: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.wishListProducts = currentState.wishListProducts.filter(
        (product) => product.id !== id
      );

      return currentState;
    }),
    addToCart: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newProduct = {
        ...product,
        totalPrice: product.price,
        amount: 1,
      }
      const inCartProduct = currentState.cartProducts.find((data) => data.id == newProduct.id)
      
      if (!inCartProduct)
        currentState.cartProducts.push(newProduct);

      return currentState;
    }),

  removeFromCart: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.cartProducts = currentState.cartProducts.filter(
        (product) => product.id !== id
      );

      return currentState;
    }),

  addProductAmount: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.cartProducts = currentState.cartProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              amount: product.amount + 1,
              totalPrice: product.price * (product.amount + 1),
            }
          : product
      );

      return currentState;
    }),

  minusProductAmount: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.cartProducts = currentState.cartProducts.map((product) =>
        product.id === id && product.amount > 1
          ? {
              ...product,
              amount: product.amount - 1,
              totalPrice: product.price * (product.amount - 1),
            }
          : product
      );

      return currentState;
    }),
}));