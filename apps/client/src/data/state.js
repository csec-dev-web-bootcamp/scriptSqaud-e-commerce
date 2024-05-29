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
        quantity: 1,
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
        quantity: 1,
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
              quantity: product.quantity + 1,
              totalPrice: product.price * (product.quantity + 1),
            }
          : product
      );

      return currentState;
    }),

  minusProductAmount: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.cartProducts = currentState.cartProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? {
              ...product,
              quantity: product.quantity - 1,
              totalPrice: product.price * (product.quantity - 1),
            }
          : product
      );

      return currentState;
    }),
}));