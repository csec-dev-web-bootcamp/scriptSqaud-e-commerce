"use client"
import { useState, useEffect } from 'react';

const PaymentHistory = ({ paymentData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPaymentMethod, setFilterPaymentMethod] = useState('');
  const [filteredPayments, setFilteredPayments] = useState(paymentData);

  useEffect(() => {
    filterPayments();
  }, [searchQuery, filterDate, filterStatus, filterPaymentMethod]);

  const filterPayments = () => {
    let filtered = paymentData;

    if (searchQuery) {
      filtered = filtered.filter(payment =>
        payment.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterDate) {
      filtered = filtered.filter(payment => payment.date === filterDate);
    }

    if (filterStatus) {
      filtered = filtered.filter(payment => payment.status === filterStatus);
    }

    if (filterPaymentMethod) {
      filtered = filtered.filter(payment => payment.paymentMethod === filterPaymentMethod);
    }

    setFilteredPayments(filtered);
  };

  return (
    <div className=" continer h-screen border rounded-md p-8">
      <h2 className=" text-xl font-semibold">Payment History</h2>
      <div className='border space-x-12 p-1'>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='border'
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className='border'
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className='border'
        >
          <option value="">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
        <select
          value={filterPaymentMethod}
          onChange={(e) => setFilterPaymentMethod(e.target.value)}
          className='border'
        >
          <option value="">All Payment Methods</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
      </div>
      <table className='border mb-16 items-center  w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <th> Method</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.status}</td>
              <td>{payment.total}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PaymentHistory;
// Example usage with sample payment data
