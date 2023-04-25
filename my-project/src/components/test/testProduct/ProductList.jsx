import React, { useState } from "react";
import ProductCategory from "./ProductCategory";
import Product from "./Product";
import one from "../../../assets/1.jpg";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductList = ({ products, filterText, inStockOnly }) => {
  const [view, setView] = React.useState("list");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  //
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    console.log("products", product);
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        // <ProductCategory category={product.category} key={product.category} />
        <span className="font-bold">{product.category}</span>
      );
    }
    // rows.push(<Product product={product} key={product.name} />);
    rows.push(
      <div>
        <span>{name}</span>
        <span>{product.name}</span>
      </div>
    );

    // rows.push(<span className="">{}</span>);
    lastCategory = product.category;
    ``;
  });

  return (
    <div>
      {/* ProductCategoryRow */}
      {/* product row  */}
      <table>
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody> */}
      </table>

      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        style={{ display: "contents" }}
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="quilt" aria-label="quilt">
          <ViewQuiltIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((E) => {
              return (
                <>
                  {inStockOnly && E.stocked && (
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={one}
                          alt="blog"
                        />
                        <div className="p-6">
                          {E.category !== lastCategory && (
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              {E.category}
                            </h2>
                          )}
                          <h1 className="text-lg font-medium text-gray-900 mb-3">
                            {E.name}
                          </h1>
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
