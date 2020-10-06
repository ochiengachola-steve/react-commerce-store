import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Products from "./Products";
import Title from "./Title";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our " title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Products product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
