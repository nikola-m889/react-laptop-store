import React, { Component } from "react";
import { ContextConsumer } from "../context/context";
import { Link } from "react-router-dom";
import { StoreButton } from "../styled/StoreButton";

export default class ItemPreview extends Component {
  render() {
    return (
      <ContextConsumer>
        {(value) => {
          const { id, name, img, price, info, manufacturer, inCart } =
            value.detailProduct;
          return (
            <div className="item-cols">
              <div class="col1">
                <img src={img} alt="product" />
              </div>
              <div class="col2">
                <div className="container">
                  <h2>{name}</h2>
                  <h3 className="specs">Produced by : {manufacturer}</h3>
                  <div className="product-info">
                    <h3>Product info: </h3>
                    <p>{info}</p>
                  </div>
                  <h3 className="specs">Product price : $ {price}</h3>
                </div>
                <div className="shop">
                  <Link to="/">
                    <StoreButton preview>Back to store</StoreButton>
                  </Link>

                  <StoreButton
                    preview
                    disabled={inCart ? true : false}
                    onClick={() => value.addCart(id)}
                  >
                    {inCart ? "In cart" : "Add to cart"}
                  </StoreButton>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}
