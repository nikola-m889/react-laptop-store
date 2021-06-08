import React from "react";
import { StoreButton } from "../styled/StoreButton";

export default function CartCost({ value }) {
  const { totalNTax, tax, finalCost } = value;
  return (
    <div className="cart-container">
      <div className="cart-summary-wrap">
        <div className="cart-summary">
          <p>Total : </p>
          <p>{totalNTax} $</p>
        </div>
        <div className="cart-summary">
          <p>Tax : </p>
          <p>{tax} $</p>
        </div>
        <div className="cart-summary">
          <p>Total Cost : </p>
          <p>{finalCost} $</p>
        </div>
      </div>
      <StoreButton preview onClick={() => value.resetCart()}>
        Clear cart
      </StoreButton>
    </div>
  );
}
