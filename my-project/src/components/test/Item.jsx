import React from "react";
import { product } from "../../constants/index";

const Item = ({ name, category }) => {
  return (
    <div>
      <div className="">
        <div>
          <span className="text-green-400">Name:</span>
          {name}
        </div>
        <div>
          <span className="text-red-500">Category:</span>
          {category}
        </div>
      </div>
    </div>
  );
};

export default Item;
