import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [buyer, setBuyer] = useState('');
  const [seller, setSeller] = useState('');
  const [buyerQty, setBuyerQty] = useState("");
  const [buyerPrice, setBuyerPrice] = useState("");
  const [sellerPrice, setSellerPrice] = useState("");
  const [sellerQty, setSellerQty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({buyer,seller, buyerQty, buyerPrice, sellerPrice, sellerQty });
    setBuyer('');
    setSeller('');
    setBuyerQty('');
    setBuyerPrice('');
    setSellerPrice('');
    setSellerQty('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select : <span>{" "}</span>
        <select value={buyer} onChange={event => setBuyer(event.target.value)}>
          <option value="">Select Option</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </label>
      
      <label>
        Buyer Qty : <span>{" "}</span>
        <input type="number" value={buyerQty} onChange={(e) => setBuyerQty(e.target.value)} />
      </label>
      <label>
        Buyer Price : <span>{" "}</span>
        <input type="number" value={buyerPrice} onChange={(e) => setBuyerPrice(e.target.value)} />
      </label>
      <label>
        Seller Price : <span>{" "}</span>
        <input type="number" value={sellerPrice} onChange={(e) => setSellerPrice(e.target.value)} />
      </label>
      <label>
        Seller Qty : <span>{" "}</span>
        <input type="number" value={sellerQty} onChange={(e) => setSellerQty(e.target.value)} />
      </label>
     <br /><br />
      <button type="submit">Place Order</button>
    </form>
  )
}

export default Form