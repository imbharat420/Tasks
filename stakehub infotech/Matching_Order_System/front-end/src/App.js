import './App.css';
import Form from './Components/Form';
import PendingTable from './Components/PendingTable';
import CompletedTable from './Components/CompletedTable';
import { useEffect, useState } from 'react';

function App() {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  // Fetch Order Data From Mongo DB 

  async function fetchOrders() {
    const res = await fetch('https://matching-order-system-backend.onrender.com/orders');
    const orders = await res.json();
    console.log("orders", orders);
    setPendingOrders(orders.pending);
    setCompletedOrders(orders.complete);
  }

  useEffect(() => {
    fetchOrders();
  }, []);


  // async function addOrder(orders) {
  //   const response = await fetch('/api/orders', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(orders)
  //   });
  //   const newOrder = await response.json();
  //   setPendingOrders(prevOrders => [...prevOrders, newOrder]);
  // }

  const handleSubmit = (orders) => {

    setPendingOrders([...pendingOrders, orders]);  // Add the new order to the pending orders table

    // Match new order with existing orders in the pending orders table
    let updatedPendingOrders = pendingOrders.filter((pendingOrder) => {
      if (orders.buyerPrice >= pendingOrder.sellerPrice && orders.buyerQty <= pendingOrder.sellerQty) {
        setCompletedOrders([...completedOrders, { price: pendingOrder.sellerPrice, qty: orders.buyerQty }]);

        // Update the Seller Qty
        if (orders.buyerQty < pendingOrder.sellerQty) {
          // Qty left after transaction
          return { ...pendingOrder, sellerQty: pendingOrder.sellerQty - orders.buyerQty };
        }
        else {
          return null;
        }
      } else {
        return pendingOrder;
      }
    });

    // Remove any null values from the updated pending orders table
    updatedPendingOrders = updatedPendingOrders.filter((order) => order !== null);
    setPendingOrders(updatedPendingOrders);
  };

  return (
    <div className="App">
      <h1>Order Matching System</h1>
      <div>
        <h4>Ordering Form</h4>
        <Form onSubmit={handleSubmit} />
      </div>
      <div>
        <h4>Pending Table</h4>
        <PendingTable orders={pendingOrders} onSubmit={handleSubmit} />
      </div>
      <div>
        <h4>Completed Table</h4>
        <CompletedTable orders={completedOrders} />
      </div>
    </div>
  );
}

export default App;
