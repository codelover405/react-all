import React, { useState } from "react";
import { data } from "../../../constants/index";
import styles from "../../../styles";

const ProductLists = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <div>
        <input
          className={`${styles.input}`}
          placeholder="Enter Post Title"
          onChange={(event) => setQuery(event.target.value)}
        />

        {data
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div className="box" key={index}>
              <p>{post.category}</p>
              <p>{post.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductLists;
