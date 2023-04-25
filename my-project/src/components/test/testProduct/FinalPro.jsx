import React, { useState } from "react";
import ProductList from "./ProductList";
import Search from "./Search";

const FinalPro = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  console.log("@filter", filterText);
  return (
    <div>
      {/* // search bar */}
      {/* // product table */}
      <Search
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductList
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FinalPro;
