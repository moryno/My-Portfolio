import React, { useState } from "react";
import Profile from "../images/sus.jpg";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <main className="md:hidden w-full  bg-background text-white">
      <section className="container mx-auto py-5 flex items-center justify-between">
        <article className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            src={Profile}
            alt="profile"
          />
          <h2 className="text-xl font-bold ">Maurice Nganga</h2>
        </article>
        <article>
          <div
            onClick={expand}
            className="space-y-1 md:hidden cursor-pointer z-50"
          >
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
          {isExpanded && (
            <ul className=" absolute top-0 left-0 bg-neutral-900 text-white text-center rounded-b-3xl w-full space-y-10 p-10 z-20">
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                About
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                Skills
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                Projects
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                Blog
              </li>
              <li
                className="cursor-pointer hover:text-gray-300"
                onClick={expand}
              >
                Contact
              </li>
            </ul>
          )}
        </article>
      </section>
    </main>
  );
};

export default Navbar;
