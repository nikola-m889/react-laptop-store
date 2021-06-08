import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ItemDetails } from "../styled/ItemDetails";
import { ContextConsumer } from "../context/context";

export default class StoreItem extends Component {
  render() {
    const { id, name, img, price, inCart } = this.props.product;
    return (
      <ItemDetails>
        <ContextConsumer>
          {(value) => {
            return (
              <React.Fragment>
                <div
                  className="product-img"
                  onClick={() => value.addPreview(id)}
                >
                  <Link to="/preview">
                    <img src={img} alt="product" />
                  </Link>
                </div>
                <div className="info">
                  <p>{name}</p>
                </div>
                <div className="price">
                  <p>price : $ {price}</p>
                </div>
                <button
                  onClick={() => value.addCart(id)}
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    <p>
                      <i className="fas fa-cart-plus"></i> In Cart
                    </p>
                  ) : (
                    <p>
                      {" "}
                      <i className="fas fa-cart-plus"></i>Add to cart
                    </p>
                  )}
                </button>
              </React.Fragment>
            );
          }}
        </ContextConsumer>
      </ItemDetails>
    );
  }
}
