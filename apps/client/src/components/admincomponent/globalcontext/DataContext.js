"use client";
import { UserData } from '@app/client/data/admindata/userdata';
import { create } from "zustand";

export const useGlobalState = create((set) => ({
  products: [],
  categories: [],
  users: [],
  setProducts: (products) =>
    set((state) => {
      return { products };
    }),
  setCatagories: (products) =>
    set((state) => {
      return { products };
    }),
  setUsers: (products) =>
    set((state) => {
      return { products };
    }),
}));

export const DataProvider = ({ products }) => {
  const globalState = useGlobalState();
  useEffect(() => {
    globalState.setProduct(producs);
    globalState.setProduct(producs);
  }, [producs]);

  return <></>;
};

export default DataContext;
