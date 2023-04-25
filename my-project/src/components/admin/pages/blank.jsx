import React from "react";
import styles from "../../../styles";

const Blank = ({ children }) => {
  return (
    <div className=" lg:w-4/5 w-screen">
      <div className={styles.adminContent}>blank</div>
    </div>
  );
};

export default Blank;
