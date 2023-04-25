import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import styles from "../../../styles";

// or
// import { FormControl } from "@mui/material";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search.."
        className={`w-full ${styles.input}`}
      />
    </div>
  );
};

export default Search;
