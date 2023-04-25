import React, { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
import Search from "./Search";
import Category from "./category";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const All = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [data, setData] = useState("all");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      <header className="my-2 md:flex justify-around">
        <ButtonToggle />
        <Search />
        {/* <Category /> */}
        <button onClick={() => setData("jewelery")}>btn</button>
      </header>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={"all"} onClick={() => setData("all")}>
            All
          </MenuItem>
          <MenuItem value={"Tv"} onClick={() => setData("Tv")}>
            Tv
          </MenuItem>
          <MenuItem value={"mobile"} onClick={() => setData("mobile")}>
            Mobile
          </MenuItem>
          <MenuItem value={"jewelery"} onClick={() => setData("jewelery")}>
            Jewelery
          </MenuItem>
        </Select>
      </FormControl>

      {(data === "jewelery" || data === "all") && (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            architecto inventore necessitatibus accusamus veritatis a commodi?
            Soluta dolor qui alias minus vero, esse ut molestias quas officiis
            fugiat molestiae aliquid.
          </p>
        </>
      )}
      {(data === "mobile" || data === "all") && (
        <>
          <p>mkkmkmkm</p>
        </>
      )}
      {(data === "Tv" || data === "all") && <p>Tv</p>}
      {(data === "home" || data === "all") && <p>Home</p>}
    </div>
  );
};

export default All;
