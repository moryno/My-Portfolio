import React from "react";
import { MdMap, MdPhone, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <main className="w-full flex flex-col gap-5 bg-background text-gray-300 text-sm p-2 sm:p-5 md:p-10">
      <section className="hidden sm:flex  lg:flex-row gap-2 container items-center mx-auto justify-between p-2 sm:p-5">
        <article className="flex items-center flex-col gap-3">
          {" "}
          <div className="flex items-center justify-center rounded-full  text-title">
            <MdMap size={"1.5rem"} />
          </div>
          {"  "}
          Nairobi, Kenya
        </article>
        <article className="flex items-center flex-col gap-3">
          {" "}
          <div className="flex items-center justify-center rounded-full  text-title">
            <MdPhone size={"1.5rem"} />
          </div>
          {"  "}
          (+254) 715 018 410
        </article>
        <article className="flex items-center flex-col gap-3">
          {" "}
          <div className="flex items-center justify-center rounded-full  text-title">
            <MdSend size={"1.5rem"} />
          </div>
          {"  "}
          mauricenganga41@gmail.com
        </article>
      </section>
      <hr className="hidden sm:block container mx-auto  border-gray-600" />
      <section className="flex flex-col lg:flex-row gap-2 container items-center mx-auto justify-between  p-2 sm:p-5">
        <article className="flex gap-8">
          <a
            href={`https://twitter.com/MauriceNganga5`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110  justify-center rounded-full">
              <FaTwitter size={"1.5rem"} />
            </div>
          </a>
          <a
            href={`https://github.com/moryno/`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110  justify-center rounded-full">
              <FaGithub size={"1.5rem"} />
            </div>
          </a>
          <a
            href={`https://www.linkedin.com/in/mauricenganga`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center cursor-pointer transition ease-in-out hover:scale-110 justify-center rounded-full">
              <FaLinkedin size={"1.5rem"} />
            </div>
          </a>
        </article>
        <p>
          Copyright © {year} Maurice Nganga, all rights reserved. Design by{" "}
          <span className="text-title cursor-pointer ">
            <a href={`#about`}>Maurice</a>
          </span>
        </p>
      </section>
    </main>
  );
};

export default Footer;
