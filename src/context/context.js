import React, { Component } from "react";
import { laptopList, laptopSpecs } from "../laptops";

const ContextProduct = React.createContext();

class GlobalContext extends Component {
  state = {
    products: laptopList,
    detailProduct: laptopSpecs,
    cart: [],
    totalNTax: 0,
    tax: 0,
    finalCost: 0,
    windowData: laptopSpecs,
    windowSet: false,
  };

   componentDidMount() {
    this.defaultData();
    const cart = localStorage.getItem("cartData");
    this.setState({ cart: JSON.parse(cart) ? JSON.parse(cart) : [] });
    const final = localStorage.getItem("costFinal1");
    this.setState(
      { finalCost: JSON.parse(final) ? JSON.parse(final) : [] },
      () => {
        this.calcCost();
      }
    );
  }
  
  defaultData = () => {
    let productsCopy = [];
    laptopList.forEach((item) => {
      const itemCopy = { ...item };
      productsCopy = [...productsCopy, itemCopy];
    });
    this.setState(() => {
      return {
        products: productsCopy,
      };
    });
  };

  getData = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addPreview = (id) => {
    const product = this.getData(id);
    this.setState(() => {
      return {
        detailProduct: product,
      };
    });
  };

  addCart = (id) => {
    const cartProducts = [...this.state.products];
    const index = cartProducts.indexOf(this.getData(id));
    const cartItem = cartProducts[index];
    cartItem.inCart = true;
    cartItem.count = 1;
    const price = cartItem.price;
    cartItem.total = price;

    this.setState(
      () => {
        return {
          products: [...cartProducts],
          cart: [...this.state.cart, cartItem],
        };
      },
      () => {
        this.calcCost();
        this.windowOpen(id);
        this.saveCart();
      }
    );
  };
  
   saveCart = () => {
    localStorage.setItem("cartData", JSON.stringify(this.state.cart));
    localStorage.setItem("total1", JSON.stringify(this.state.totalNTax));
    localStorage.setItem("tax1", JSON.stringify(this.state.tax));
    localStorage.setItem("costFinal1", JSON.stringify(this.state.finalCost));
  };

  resetCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.defaultData();
        this.calcCost();
        this.saveCart();
      }
    );
  };

  removeCartItem = (id) => {
    const cartProducts = [...this.state.cart];
    const cartDelete = cartProducts.filter((item) => item.id !== id);
    /*
      const index = cartProducts.indexOf(this.getData(id));
      const deletedItem = cartProducts[index];
      deletedItem.inCart = false;
      deletedItem.count = 0;
   */

    this.setState(
      () => {
        return {
          cart: [...cartDelete],
        };
      },
      () => {
        this.saveCart();
        this.calcCost();
      }
    );
  };

  calcCost = () => {
    let cartTotal = 0;
    this.state.cart.map((item) => (cartTotal += item.total));
    const productTax = cartTotal * 0.15;
    const ItemTax = parseFloat(productTax.toFixed(2));
    const totalCost = cartTotal + ItemTax;

    this.setState(() => {
      return {
        totalNTax: cartTotal,
        tax: ItemTax,
        finalCost: totalCost,
      };
    });
  };

  windowOpen = (id) => {
    const selectedItem = this.getData(id);
    this.setState(
      () => {
        return {
          windowSet: true,
          windowData: selectedItem,
        };
      },
      () => {
        this.calcCost();
      }
    );
  };

  windowClose = () => {
    this.setState(() => {
      return {
        windowSet: false,
      };
    });
  };

  incrementItem = (id) => {
    let cartProducts = [...this.state.cart];
    const cartItem = cartProducts.find((item) => item.id === id);
    const index = cartProducts.indexOf(cartItem);
    const product = cartProducts[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...cartProducts],
        };
      },
      () => {
        this.calcCost();
        this.saveCart();
      }
    );
  };

  decrementItem = (id) => {
    let cartProducts = [...this.state.cart];
    const cartItem = cartProducts.find((item) => item.id === id);
    const index = cartProducts.indexOf(cartItem);
    const product = cartProducts[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeCartItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...cartProducts],
          };
        },
        () => {
          this.calcCost();
          this.saveCart();
        }
      );
    }
  };

  render() {
    return (
      <ContextProduct.Provider
        value={{
          ...this.state,
          addPreview: this.addPreview,
          defaultData: this.defaultData,
          addCart: this.addCart,
          resetCart: this.resetCart,
          removeCartItem: this.removeCartItem,
          windowOpen: this.windowOpen,
          windowClose: this.windowClose,
          incrementItem: this.incrementItem,
          decrementItem: this.decrementItem,
        }}
      >
        {this.props.children}
      </ContextProduct.Provider>
    );
  }
}

const ContextConsumer = ContextProduct.Consumer;

export { GlobalContext, ContextConsumer };
