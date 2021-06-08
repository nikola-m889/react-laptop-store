import React from "react";

export default function CartProduct({ product, value }) {
  const { id, img, title, price, count, total } = product;
  const { removeCartItem, incrementItem, decrementItem } = value;

  return (
    <div className="product-cart">
      <div>
        <img src={img} alt="product" />
      </div>

      <div>
        <span>Product</span>
        <br />
        <p>{title}</p>
      </div>

      <div>
        <span>Price:</span>
        <br />
        <p>{price}</p>
      </div>

      <div className="q">
        <span>Count:</span>
        <br />
        <div className="quantity">
          <div className="decrement" onClick={() => decrementItem(id)}>
            -
          </div>
          <div>{count}</div>
          <div className="increment" onClick={() => incrementItem(id)}>
            +
          </div>
        </div>
      </div>

      <div>
        <span>Total:</span>
        <br />
        {total}
      </div>

      <div>
        <span>Remove:</span>
        <br />
        <i className="fas fa-trash" onClick={() => removeCartItem(id)}></i>
      </div>
      {/*end of columns */}
    </div>
  );
}
