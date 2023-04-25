import React from "react";

const Product = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <div>
      <tr className="flex space-x-3">
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  );
};

export default Product;
