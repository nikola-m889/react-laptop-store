import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StoreList from "./components/StoreList";
import ItemPreview from "./components/ItemPreview";
import Cart from "./Cart/Cart";
import Default from "./components/Default";
import CartWindow from "./Cart/CartWindow";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="x-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={StoreList} />
            <Route path="/preview" component={ItemPreview} />
            <Route path="/cart" component={Cart} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Default} />
          </Switch>
          <Footer />
          <CartWindow />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
