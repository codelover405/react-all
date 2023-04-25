import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <div>
      <tr>
        <th className="font-bold" colSpan="2">
          {category}
        </th>
      </tr>
    </div>
  );
};

export default ProductCategoryRow;
