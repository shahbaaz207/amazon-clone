import React from "react";
import { products } from "./data";

const SingleProduct = (props) => {
  const id = props.match.params.id;
  const product = products.find((x) => x._id === id);
  console.log(product);

  return (
    <div>
      <h2>Single page</h2>
    </div>
  );
};

export default SingleProduct;
