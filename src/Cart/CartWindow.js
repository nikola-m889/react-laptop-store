import React, { Component } from "react";
import { ContextConsumer } from "../context/context";
import { Link } from "react-router-dom";
import { ProductWindow } from "../styled/ProductWindow";
import { StoreButton } from "../styled/StoreButton";

export default class CartWindow extends Component {
  render() {
    return (
      <ContextConsumer>
        {(value) => {
          const { img, name, price } = value.windowData;
          const { windowSet, windowClose } = value;
          if (windowSet) {
            return (
              <ProductWindow>
                <div className="window-info">
                  <div className="image">
                    <img src={img} alt="product" />
                  </div>
                  <div className="title">
                    <h3>{name}</h3>
                  </div>
                  <div className="price">
                    <p>Price : {price} $</p>
                  </div>
                  <div className="price2">
                    <p>Total : {value.finalCost} $</p>
                  </div>
                  <div className="button1">
                    <Link to="/" onClick={() => windowClose()}>
                      <StoreButton preview>Continue</StoreButton>
                    </Link>
                  </div>
                  <div className="button2">
                    <Link to="/cart" onClick={() => windowClose()}>
                      <StoreButton preview>Go to cart</StoreButton>
                    </Link>
                  </div>
                </div>
              </ProductWindow>
            );
          } else {
            return null;
          }
        }}
      </ContextConsumer>
    );
  }
}
