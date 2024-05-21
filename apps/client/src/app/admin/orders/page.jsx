"use client";

import Order from '@app/client/components/admincomponent/order/order';
import { orderData } from '@app/client/data/admindata/orderdata';
import { useState } from 'react';

export default function Orders() {
  const [Orders, setOrders] = useState(orderData);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") { setOrders(orderData); return; }
    const filterBySearch = orderData.filter((item) => {
      if (item.customer_name.toLowerCase().includes(searchVal.toLowerCase())) { return item; }
    });
    setOrders(filterBySearch);
  }

  const orders = Orders.map((order) => (
    <Order
      key={order.id}
      id={order.id}
      delivery={order.status}
      date={order.order_date}
      product={order.products.length}
      total={order.total_amount}
      fullname={order.customer_name}
    />
  ));

  return (
    <div className='home'>
      <h2 className='name_header'>View Orders</h2>
      <div className='users'>
        <div className='userheader-container'>
          <div className='search-users'>
            <label htmlFor="search">Search by Product :</label>
            <input name='search' onKeyDown={handleSearchClick} onChange={e => setSearchVal(e.target.value)} type="text" />
          </div>
        </div>
        <div className='table'>
          <div className='users_information_contatiner_ligh'>
            <p className='small'>Number</p>
            <p>Customer Name</p>
            <p>Product Ordered</p>
            <p>Date</p>
            <p className='small'>Total Spending</p>
            <p>Status</p>
          </div>
          {orders}
        </div>
      </div>
    </div>
  );
}
