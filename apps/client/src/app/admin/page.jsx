"use client";

import React, { useEffect, useState } from "react";
import OrdersBarChart from "@app/client/components/admincomponent/chart/BarChart";
import OrdersCategoryPieChart from "@app/client/components/admincomponent/chart/piechrt";
import ChartComponent from "@app/client/components/admincomponent/chart/lineChart";
import { orderData } from "@app/client/data/admindata/orderdata";
import { UserData } from "@app/client/data/admindata/userdata";
// import { productData } from "@app/client/data/product.data";
import { useGlobalState } from "@app/client/components/admincomponent/globalcontext/DataContext";
import Total from "@app/client/components/admincomponent/total/total";

export default function page() {
  const productData = useGlobalState((state) => state.products)

  const [total_sale, setTotal_sale] = useState(0);
  useEffect(() => {
    const total = orderData.reduce((acc, order) => acc + order.total_amount, 0);
    setTotal_sale(total);
  }, []);
  return (
    <div className="home">
      <h2 className="name_header">Dashboard</h2>
      <div className="home_info">
        <div className="totals">
          <Total total={total_sale.toFixed(2)} img="sale.svg" type="Sale" />
          <Total total={productData.length} img="revenu.svg" type="Products" />
          <Total total={1000} img="profit.svg" type="Profit" />
          <Total total={UserData.length} img="user.svg" type="Users" />
        </div>
        <div className="bar_pie_container">
          <div className="barchart shadow">
            <OrdersBarChart orders={orderData} />
          </div>

          <div className="piechart shadow">
            <OrdersCategoryPieChart orderData={orderData} />
          </div>
        </div>
        <ChartComponent userData={UserData} />
      </div>
    </div>
  );
}
