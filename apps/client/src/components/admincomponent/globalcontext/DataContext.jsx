"use client";

import { useGlobalState } from "@app/client/data/globalState";
import { useEffect } from "react";


export const DataProvider = ({ products, categories }) => {
  const globalState = useGlobalState();
  useEffectt(() => {
    globalState.setProducts(products);
    globalState.setCatagories(categories);
  }, [products]);

  return <></>;
};
