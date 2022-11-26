import React from "react";
import AboutImg from "../images/me-bg.png";

const Sidebar = () => {
  return (
    <main className="hidden md:block sticky top-0  h-screen lg:w-2/12 lg:p-5 text-center bg-background text-white">
      <section className="flex h-5/6 justify-evenly flex-col">
        <section className="flex flex-col items-center ">
          <img
            className="w-20 h-20 bg-skill rounded-full object-cover cursor-pointer my-5"
            src={AboutImg}
            alt="profile"
          />
          <h2 className="md:my-2">Maurice Nganga</h2>
          <span className="text-slate-400">Available for work</span>
        </section>
        <section className="">
          <ul className="flex flex-col items-center gap-10">
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              {" "}
              <a href={`#home`}>Home</a>
            </li>
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              <a href={`#about`}>About</a>
            </li>
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              <a href={`#skills`}>Skills</a>
            </li>
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              <a href={`#projects`}>Projects</a>
            </li>
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              <a href={`#blog`}>Blog</a>
            </li>
            <li className="cursor-pointer transition ease-in-out hover:scale-110  hover:text-gray-300">
              <a href={`#contact`}>Contact</a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Sidebar;
