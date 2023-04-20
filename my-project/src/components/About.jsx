import React from "react";
import AboutCard from "./small/aboutCard";
import styles from "../styles";

const About = () => {
  return (
    <div>
      <section
        className={`bg-[#111827] text-white text-center rounded-xl my-10 px-5 py-36 ${styles.container}`}
      >
        <h1 className="md:text-7xl text-4xl font-bold pb-5 md:pb-10">
          Support Center
        </h1>
        <p className={`${styles.paragraph} opacity-60`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          maxime fugiat? Non impedit facere deleniti placeat obcaecati. Quo
          voluptatum omnis fugiat dolor repellat, aliquam dolore necessitatibus
          ex inventore, architecto porro.
        </p>
      </section>
    </div>
  );
};

export default About;
