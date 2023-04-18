import React from "react";
import styles from "../styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className={styles.blueGradient}>404 Not Found!</h1>
            <p
              className={`${styles.paragraph} mx-auto mt-4 max-w-xl sm:text-xl/relaxed`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex  justify-center">
              <button
                onClick={goToHomePage}
                className={styles.blueBtnOutline}
                to="/home"
              >
                Go To Home Page
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
