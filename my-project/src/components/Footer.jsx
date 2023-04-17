import React from "react";
import { footerLinks } from "../constants/index";

const Footer = () => {
  return (
    <div>
      <footer className="w-full grid md:grid-cols-4 sm:grid-cols-2 bg-slate-800 text-white px-5 py-10">
        {footerLinks.map((link, index) => {
          return (
            <>
              <div>
                <h1 className="font-bold my-2 text-2xl">{link.title}</h1>
                <ul className="flex">
                  <li className="" key={index + 2}>
                    {link.links.map((e, index) => {
                      return (
                        <>
                          <li key={index + 1} className="opacity-50">
                            {e.name}
                          </li>
                        </>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;
