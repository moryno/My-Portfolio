import React from "react";
import Profile from "../images/sus.jpg";

const Sidebar = () => {
  return (
    <main className="hidden  md:block  min-h-screen lg:w-2/12 lg:p-5 text-center bg-background text-white">
      <section className="flex flex-col items-center ">
        <img
          className="w-20 h-20 rounded-full object-cover cursor-pointer my-5"
          src={Profile}
          alt="profile"
        />
        <h2 className="md:my-2">Maurice Nganga</h2>
        <span className="text-slate-400">Available for work</span>
      </section>
      <section className="my-10">
        <ul className="flex flex-col items-center gap-10">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Skills</li>
          <li className="cursor-pointer hover:text-gray-300">Projects</li>
          <li className="cursor-pointer hover:text-gray-300">Blog</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
