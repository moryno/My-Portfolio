import React from "react";
import AboutImg from "../images/me-bg.png";

const About = () => {
  return (
    <main className="w-full">
      <section className="container mx-auto p-5 md:py-20  ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">About me</h1>
          <p className="text-slate-800">Get to know me</p>
        </article>
        <article className="w-full flex mt-5 flex-col lg:flex-row items-center gap-20">
          <article className="lg:w-5/12">
            <img
              className="h-full object-cover"
              src={AboutImg}
              alt="landingImage"
            />
          </article>
          <article className="lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-title text-xl mb-2">Who am I?</h1>
            <h1 className="text-2xl  font-semibold">
              I'm Maurice Nganga, a FullStack Web Developer
            </h1>
            <p className="text-slate-600 py-5">
              I am a software developer based in Nairobi Kenya,and I create
              amazing solutions for Web applications. I help convert a vision
              and an idea into meaningful and useful software products. Having
              the ability to transform requirements into useful software helps
              me prioritize tasks, iterate fast and deliver faster. Take a look
              at my portfolio work and lets see if we can work together on your
              next project.
            </p>
            <hr />
            <div className="py-5 flex flex-wrap justify-between w-full">
              <p className="w-1/2 my-1">
                <span className=" font-semibold text-md">Name: </span> Maurice
                Nganga
              </p>{" "}
              <p className="w-1/2 my-1">
                <span className=" font-semibold text-md">Email: </span>{" "}
                mauricenganga@gmail.com
              </p>{" "}
              <p className="w-1/2 my-1  text-title">
                <span className=" font-semibold text-md  text-black">
                  Phone:{" "}
                </span>
                (254) 715 018 410
              </p>{" "}
              <p className="w-1/2 my-1 text-title">
                <span className=" font-semibold text-md text-black">
                  Github:{" "}
                </span>
                https://github.com/moryno
              </p>{" "}
              <p className="w-1/2 my-1">
                <span className=" font-semibold text-md">LinkedIn: </span>
                maurice-nganga-a6668b213/
              </p>
              <p className="w-1/2 my-1">
                <span className=" font-semibold text-md">From: </span> Nairobi,
                Kenya
              </p>
            </div>
            <div className="flex gap-5 mt-3">
              <button className="bg-title text-white font-semibold py-2 px-3 w-fit cursor-pointer rounded-3xl">
                Download resume
              </button>
              <button className="py-2 px-10 font-semibold w-fit cursor-pointer rounded-3xl ring-1 ring-slate-400">
                My Work
              </button>
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};

export default About;
