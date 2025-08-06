"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ Define the cart item type
type CartItem = {
  _id?: string;
  title: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cart items:", err);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx} className="mb-3 border p-4 rounded">
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
