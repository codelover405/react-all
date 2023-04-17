import React from "react";
import { socialMedia } from "../../constants";

const Media = () => {
  return (
    <div>
      <div>
        <div>
          <ul className="flex flex-wrap justify-between lg:px-52 md:px-10 items-center bg-slate-900">
            {socialMedia.map((e, index) => {
              return (
                <li className="p-5 ">
                  <a href={e.link}>
                    <span className="outline-orange-500">
                      <img src={e.icon} alt={e.id} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;
