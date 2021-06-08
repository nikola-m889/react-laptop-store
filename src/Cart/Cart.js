import React, { Component } from "react";
import { ContextConsumer } from "../context/context";
import CartItems from "./CartItems";
import CartNone from "./CartNone";
import CartCost from "./CartCost";

export default class Cart extends Component {
  render() {
    return (
      <div className="container-cart">
        <ContextConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h2>Cart</h2>
                  <CartItems value={value} />
                  <CartCost value={value} />
                </React.Fragment>
              );
            } else {
              return <CartNone />;
            }
          }}
        </ContextConsumer>
      </div>
    );
  }
}
