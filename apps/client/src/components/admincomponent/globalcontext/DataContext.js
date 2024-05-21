"use client"
import React, { createContext, useState } from 'react';
import { CatagoryData } from '@app/client/data/admindata/catagoryData';
import { productData } from '@app/client/data/product';
import { UserData } from '@app/client/data/admindata/userdata';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [categoryData, setCatagoryData] = useState(CatagoryData);

  const updateCatagoryData = (newData) => {
    setCatagoryData(newData);
  };
  const [productdata, setproductdata] = useState(productData);

  const updateproductData = (newData) => {
    setproductdata(newData);
  };

  const [userdata, setUserData] = useState(UserData);

  const updateUserData = (newData) => {
    setUserData(newData);
  };
  return (
    <DataContext.Provider value={{ categoryData,userdata, productdata,updateUserData,updateproductData,updateCatagoryData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
