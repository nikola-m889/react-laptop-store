import React, { Component } from "react";
import StoreItem from "./StoreItem";
import { ContextConsumer } from "../context/context";

export default class StoreList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slider">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./img/slider1x.jpg"
                  class="d-block w-100"
                  alt="offer1"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div className="text-column one">
                    <h3>Thoughtfully designed</h3>
                    <h4>Brilliant visuals</h4>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/slider2x.jpg"
                  class="d-block w-100"
                  alt="offer2"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div className="text-column two">
                    <h3>Pure quality</h3>
                    <h4>Smart performance</h4>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/slider3x.jpg"
                  class="d-block w-100"
                  alt="offer3"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div className="text-column three">
                    <h3>Why choose Fenix Tech?</h3>
                    <h4>
                      Our commitment to our customers and technology innovation
                      are second to none!
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/*slider end */}
        <div className="container-list">
          <div className="product-list">
            <ContextConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <StoreItem key={product.id} product={product} />;
                });
              }}
            </ContextConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
