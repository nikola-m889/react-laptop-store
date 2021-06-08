import React from "react";
import CartProduct from "./CartProduct";

export default function CartItems({ value }) {
  const { cart } = value;
  return (
    <div>
      {cart.map((product) => {
        return <CartProduct key={product.id} product={product} value={value} />;
      })}
    </div>
  );
}
