import React from "react";
import FinalPro from "./FinalPro";
import styles from "../../../styles";

const FinalProduct = () => {
  return (
    <div>
      <FinalPro products={PRODUCT} />
      <div className={`${styles.paddingX} bg-lime-200 h-8`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        aliquam reprehenderit vero id quibusdam! Numquam eum officia provident a
        unde ut consectetur? Provident harum hic atque sint sunt labore
        doloremque.
      </div>
    </div>
  );
};

export default FinalProduct;

export const PRODUCT = [
  { category: "mobile", price: "$10", stocked: true, name: "apple12" },
  { category: "mobile", price: "$20", stocked: true, name: "m20" },
  { category: "mobile", price: "$56", stocked: false, name: "apple10" },
  { category: "pen-drive", price: "$1", stocked: false, name: "dell" },
  { category: "pen-drive", price: "$5", stocked: true, name: "hp" },
  { category: "pen-drive", price: "$6", stocked: false, name: "hp20" },
  { category: "cloth", price: "$6", stocked: false, name: "zara-m" },
  { category: "cloth", price: "$6", stocked: false, name: "ajio" },
];
