import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item";

const Filter = () => {
  var defaultC = [
    { name: "Table Tennis", category: "Indoor" },
    { name: "Football", category: "Outdoor" },
    { name: "Swimming", category: "Aquatics" },
    { name: "Chess", category: "Indoor" },
    { name: "BaseBall", category: "Outdoor" },
  ];

  const [List, setList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // Add default value on page load
  useEffect(() => {
    setList(defaultC);
  }, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return List;
    }
    return List.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, List]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <div className="">
        <div>Filter by Category:</div>
        <div>
          <select name="" id="" onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
        </div>
      </div>
      <div className="">
        {filteredList.map((element, index) => {
          console.log("filter", element);
          return <Item {...element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
