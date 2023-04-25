import React, { useState, useEffect } from "react";
// import { product } from "../../constants/index";
import styles from "../../styles";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Card = ({}) => {
  const [query, setQuery] = useState("");
  const [stock, setStock] = useState(false);
  const [notStock, setNotStock] = useState(true);

  const habdlestock = (e) => {
    if (stock == true) {
      setNotStock(false);
    }
  };

  // toggle buttons
  const [view, setView] = React.useState("grid");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  // selete
  const [category, setCategory] = useState("");

  const handleChangeSeleted = (event) => {
    setAge(event.target.value);
  };

  //
  const product = [
    {
      id: 1,
      background: "bg-six ",
      name: "one",
      category: "clothes",
      desc: {
        date: "20 March 2014",
        user: "User Name",
        title: "Boost Your conversion rate",
        price: 10.99,
        stocked: false,
      },
    },
    {
      id: 2,
      background: "bg-two",
      name: "two",
      category: "clothes",
      desc: {
        date: "25 March 2018",
        user: "User Name",
        title: "Boost Your conversion rate1",
        price: 10.99,
        stocked: true,
      },
      year: 2018,
    },
    {
      id: 3,
      background: "bg-three",
      name: "three",
      category: "clothes",
      desc: {
        date: "02 March 2015",
        user: "User Name",
        title: "Boost Your conversion rate2",
        price: 10.99,
        stocked: false,
      },
      year: 2020,
    },
    {
      id: 4,
      background: "bg-four",
      name: "four",
      category: "mobile",
      desc: {
        date: "20 March 2016",
        user: "User Name",
        title: "Boost Your conversion rate3",
        price: 10.99,
        stocked: true,
      },
    },
    {
      id: 5,
      background: "bg-five",
      name: "five",
      category: "tv",
      desc: {
        date: "06 March 2001",
        user: "User Name",
        title: "Boost Your conversion rate4",
        price: 10.99,
        stocked: true,
      },
    },
  ];
  const [filteredList, setFilteredList] = useState(product);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState();

  const filterByBrand = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedBrand) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.name.split(" ").indexOf(selectedBrand) !== -1
    );
    return filteredCars;
  };
  const filterByYear = (filteredData) => {
    // Avoid filter for null value
    if (!selectedYear) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
      (car) => car.release_year === selectedYear
    );
    return filteredCars;
  };

  // Update seletedBrand state
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Toggle seletedYear state
  const handleYearChange = (event) => {
    const inputYear = Number(event.target.id);

    console.log("input year", inputYear);

    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(inputYear);
    }
  };

  useEffect(() => {
    var filteredData = filterByBrand(product);
    // console.log(filteredData);
    filteredData = filterByYear(filteredData);
    setFilteredList(filteredData);
  }, [selectedBrand, selectedYear]);

  return (
    <>
      <div className={`${styles.container} my-4`}>
        <div
          className={`flex md:flex-row justify-between md:items-center items-start flex-col`}
        >
          <input
            className={`${styles.input} md:w-1/2 w-full `}
            placeholder="Enter Post Title"
            onChange={(event) => setQuery(event.target.value)}
          />

          <span className="text-sm ">
            Stock Available
            <input
              type="checkbox"
              checked={stock}
              onChange={(e) => setStock(e.target.checked)}
              // onClick={habdlestock}
            />
          </span>
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            className=""
            exclusive
            onChange={handleChange}
            defaultChecked={view == "grid"}
          >
            <ToggleButton value="two" aria-label="two">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>

          {/* selete */}
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={category}
              label="Category"
              onChange={handleChangeSeleted}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"Tv"}>Tv</MenuItem>
              <MenuItem value={"mobile"}>Mobile</MenuItem>
              <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            </Select>
          </FormControl> */}
          <FormControl className="w-20">
            <InputLabel id="demo-simple-select-label">Ceatogry</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="brand-input"
              value={selectedBrand}
              onChange={handleBrandChange}
              label="Age"
            >
              <MenuItem value={""}>All</MenuItem>
              <MenuItem value={"tv"}>tv</MenuItem>
              <MenuItem value={"VW"}>vw</MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
            </Select>
          </FormControl>

          <div
            id="year-options"
            className="flex space-x-10"
            onClick={handleYearChange}
          >
            <div
              className={
                selectedYear === 2018
                  ? "bg-gray-400 rounded-md p-2"
                  : "text-black"
              }
              id="2018"
            >
              2018
            </div>
            <div
              className={
                selectedYear === 2019
                  ? "bg-gray-400 rounded-md p-2"
                  : "filter-option"
              }
              id="2019"
            >
              2019
            </div>
            <div
              className={
                selectedYear === 2020
                  ? "bg-gray-400 rounded-md p-2"
                  : "filter-option"
              }
              id="2020"
            >
              2020
            </div>
          </div>
        </div>

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
                          className={` img-card bg-center img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover  cursor-pointer`}
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
        <hr />
        <hr />
        <hr />
        <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 my-4">
          {product
            ?.filter((e, index) => {
              if (query === "") {
                return e;
              } else if (e.name.toLowerCase().includes(query.toLowerCase())) {
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
                      className={` img-card bg-center img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover  cursor-pointer`}
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

        {/* 2 */}
        <div className="bg-two bg-cover bg-center h-screen relative mt-10">
          <div className="absolute inset-0 bg-black bg-opacity-60 text-slate-200 text-center md:px-24 px-7  flex items-center justify-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            excepturi perferendis tempora quod ad. Ex alias temporibus, quasi et
            minima ipsa officia obcaecati pariatur incidunt iste placeat?
            Cumque, omnis.
          </div>
        </div>
      </div>

      <div className="relative bg-red-500 w-full h-80">
        uyyuy
        <div
          className=""
          style={{ bottom: "-100px", left: "calc(50% - 100px)" }}
        >
          <div className="">Hello</div>
          <div className="absolute bottom-0 h-11 top-0 left-0 right-0 m-auto border-2 bg-blue-500 w-44">
            Hello
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
