import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles";
const Hero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className={styles.blueGradient}>
              Welcome {"Utsav"}.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
            <p
              className={`${styles.paragraph} mx-auto mt-4 max-w-xl sm:text-xl/relaxed`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/about" className={styles.blueBtn} href="/">
                Get Started
              </Link>
              <Link className={styles.blueBtnOutline} href="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
