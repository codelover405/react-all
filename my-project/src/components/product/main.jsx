import React, { useState, useRef } from "react";
import FilterableProductTable from "./FilterableProductTable";
import { product } from "../../constants/index";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Main = () => {
  const [query, setQuery] = useState("");
  const [stock, setStock] = useState(false);

  const [view, setView] = useState("grid");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const [isOn, setIsOn] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsOn(!isOn);
    if (buttonRef.current) {
      buttonRef.current.classList.toggle(
        view === "grid" ? view === "grid" : view == "list"
      );
    }
  };

  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />

      {/* <button className="bg-green-500 p-3">list green</button>
      <button className="bg-red-500 p-3">grid red</button> */}

      <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
      <div ref={buttonRef} className={isOn ? "active" : ""}>
        {view == "two" && (
          <>
            <div className="mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
              {product
                ?.filter((e, index) => {
                  if (query === "") {
                    return e;
                  } else if (
                    e.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return e;
                  }
                })
                .map((e, index) => {
                  return (
                    <>
                      {/* <div
                  key={index + 1}
                  className={`${e.background} img-card img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover bg-center relative`}
                > */}
                      {!stock && (
                        <div
                          key={index + 1}
                          className={`img-card bg-center img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover  cursor-pointer`}
                        >
                          <div
                            className="text-base   text-white text-center font-bold"
                            // style={{ top: "80%", left: "20%" }}
                          >
                            <div className="flex flex-col justify-center items-center space-y-20">
                              <span className="opacity-80 font-extrabold  mt-10">
                                {e.name.toLocaleUpperCase()}
                              </span>
                              <span className="opacity-80 font-normal">
                                {e.desc.date}
                                {e.desc.user}
                              </span>
                              {e.desc.title}
                            </div>
                          </div>
                          {/* <div className="card-overlay text-white img-card">
                        <h2 className="font-bold text-lg">
                          {e.name.toLocaleUpperCase()}
                        </h2>
                        <p className="opacity-70 space-x-5">
                          <span>{e.desc.date}</span>
                          <span> {e.desc.user}</span>
                        </p>
                        <p>{e.desc.title}</p>
                      </div> */}
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </>
        )}
        {view == "grid" && (
          <>
            <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 my-4">
              {product
                ?.filter((e, index) => {
                  if (query === "") {
                    return e;
                  } else if (
                    e.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return e;
                  }
                })
                .map((e, index) => {
                  return (
                    <>
                      {/* <div
                  key={index + 1}
                  className={`${e.background} img-card img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover bg-center relative`}
                > */}
                      {!stock && (
                        <div
                          key={index + 1}
                          className={`my-2 img-card bg-center img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover  cursor-pointer`}
                        >
                          <div
                            className="text-base   text-white text-center font-bold"
                            // style={{ top: "80%", left: "20%" }}
                          >
                            <div className="flex flex-col justify-center items-center space-y-20">
                              <span className="opacity-80 font-extrabold  mt-10">
                                {e.name.toLocaleUpperCase()}
                              </span>
                              <span className="opacity-80 font-normal">
                                {e.desc.date}
                                {e.desc.user}
                              </span>
                              {e.desc.title}
                            </div>
                          </div>
                          {/* <div className="card-overlay text-white img-card">
                        <h2 className="font-bold text-lg">
                          {e.name.toLocaleUpperCase()}
                        </h2>
                        <p className="opacity-70 space-x-5">
                          <span>{e.desc.date}</span>
                          <span> {e.desc.user}</span>
                        </p>
                        <p>{e.desc.title}</p>
                      </div> */}
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;

export const PRODUCTS = [
  { category: "Car", price: "$1", stocked: true, name: "tesla" },
  { category: "Car", price: "$1", stocked: true, name: "tata nexon" },
  { category: "Car", price: "$2", stocked: false, name: "bmw" },
  { category: "Mobile", price: "$2", stocked: true, name: "Apple-14" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
