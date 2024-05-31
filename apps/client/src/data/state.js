import { create } from "zustand";
const storage = window != null ? window.localStorage : localStorage;

export const useCart = create((set) => ({
  cartProducts: storage.getItem("cartList"),
  wishListLength: 0,

  increaseLength: () =>
    set((state) => {
      console.log( { ...state, wishListLength: state.wishListLength + 1 })
      return { ...state, wishListLength: state.wishListLength + 1 };
    }),

  addToCart: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      const newProduct = {
        ...product,
        totalPrice: product.price,
        quantity: 1,
      };
      const inCartProduct = currentState.cartProducts.find(
        (data) => data.id == newProduct.id
      );

      if (!inCartProduct) currentState.cartProducts.push(newProduct);

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
  loadCart: (cart) => set((state) => {
    const currentState = JSON.parse(JSON.stringify(state));

    return {...currentState, cartProducts: cart}
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
