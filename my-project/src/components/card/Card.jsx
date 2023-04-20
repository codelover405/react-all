import React from "react";
import { product } from "../../constants/index";

const Card = ({ title, user, data }) => {
  return (
    <>
      <div>
        <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 my-4">
          {product.map((e, index) => {
            return (
              <>
                {/* <div
                  key={index + 1}
                  className={`${e.background} img-card img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover bg-center relative`}
                > */}
                <div
                  key={index + 1}
                  className={`block img-card bg-center img-card md:h-72 h-56 rounded-md bg-no-repeat bg-cover relative cursor-pointer`}
                >
                  <div
                    className="absolute  text-white text-center font-bold"
                    style={{ top: "80%", left: "20%" }}
                  >
                    <div className="space-x-10">
                      <span className="opacity-80 font-normal">
                        {e.desc.date}
                      </span>
                      <span className="opacity-80 font-normal">
                        {e.desc.user}
                      </span>
                    </div>
                    {e.desc.title}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* 2 */}
        <div class="bg-two bg-cover bg-center h-screen relative mt-10">
          <div class="absolute inset-0 bg-black bg-opacity-60 text-slate-200 text-center md:px-24 px-7  flex items-center justify-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
            excepturi perferendis tempora quod ad. Ex alias temporibus, quasi et
            minima ipsa officia obcaecati pariatur incidunt iste placeat?
            Cumque, omnis.
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
