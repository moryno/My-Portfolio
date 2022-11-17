import React from "react";
import { createPortal } from "react-dom";
import AboutImg from "../images/me-bg.png";

const Portal = () => {
  return createPortal(
    <main className="w-full  md:h-screen md:w-screen fixed top-0 bg-white left-0  opacity-0.9 flex items-center justify-center ">
      <span className="text-2xl text-gray-400 absolute top-3 right-3 lg:top-5 lg:right-10 z-50  xl:right-20">
        X
      </span>
      <section className="container mx-auto p-5 md:py-20  ">
        <article className="w-full flex mt-5 flex-col lg:flex-row items-center gap-20">
          <article className="lg:w-5/12">
            <img
              className="h-full object-cover"
              src={AboutImg}
              alt="landingImage"
            />
          </article>
          <article className="lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-black text-4xl mb-2 font-semibold">Medicine</h1>
            <p className="text-slate-600 py-5">
              I am a software developer based in Nairobi Kenya,and I create
              amazing solutions for Web applications. I help convert a vision
              and an idea into meaningful and useful software products. Having
              the ability to transform requirements into useful software helps
              me prioritize tasks, iterate fast and deliver faster. Take a look
              at my portfolio work and lets see if we can work together on your
              next project. I am a software developer based in Nairobi Kenya,and
              I create amazing solutions for Web applications. I help convert a
              vision and an idea into meaningful and useful software products.
              Having the ability to transform requirements into useful software
              helps me prioritize tasks, iterate fast and deliver faster. Take a
              look at my portfolio work and lets see if we can work together on
              your next project. next project. I am a software developer based
              in Nairobi Kenya,and I create amazing solutions for Web
              applications. I help convert a vision and an idea into meaningful
              and useful software products. Having the ability to transform
              requirements into useful software helps me prioritize tasks,
              iterate fast and deliver faster. Take a look at my portfolio work
              and lets see if we can work together on your next project.
            </p>
            <hr />
            <div className="py-5 flex flex-wrap justify-between w-full">
              <div className="w-1/2 my-1">
                <p className=" font-semibold text-md">Project: </p> Medicine
              </div>{" "}
              <p className="w-1/2 my-1  text-title">
                <span className=" font-semibold text-md  text-black">
                  Categories:{" "}
                </span>
                Web Application
              </p>{" "}
              <div className="w-1/2 my-1">
                <p className=" font-semibold text-md">Technologies: </p>
                React, JS, HTML, CSS, Rails
              </div>
            </div>
            <div className="flex gap-5 mt-3">
              <button className="bg-title text-white font-semibold py-2 px-3 w-fit cursor-pointer rounded-3xl">
                Visit Project
              </button>
            </div>
          </article>
        </article>
      </section>
    </main>,
    document.getElementById("modal")
  );
};

export default Portal;
