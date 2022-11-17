import React, { useState } from "react";

const Projects = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <main className="">
      <section className="container mx-auto p-5 ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">Projects</h1>
          <p className="text-slate-800">
            Showcasing complete functional projects demonstrates what I can
            bring to your project. I built these project from the ground up to
            demonstrate skill front-end, backend, security and database
            development. All of these projects are fullstack web projects that
            are built so that you can demo them easily. Contact me to get a
            complete code walkthrough.
          </p>
        </article>
        <article className="flex justify-between flex-wrap ">
          <div
            className="p-5 box-border bg-indigo-500 shadow-xl w-full h-card md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              className=" h-3/5  object-cover cursor-pointer self-center"
              src="https://v4.mui.com/static/logo.png"
              alt="projectImg"
            />
            <h1 className="font-bold text-3xl text-center">MEDICINE</h1>
            <p className="text-neutral-800 text-center font-semibold">
              ONLINE PHARMACY
            </p>
            {isShown && (
              <div className="w-full h-full absolute text-white top-0 left-0 bg-cardHover flex gap-4 items-center justify-center flex-col cursor-pointer z-20">
                <h1 className="font-semibold text-lg">Medicine</h1>
                <span className="text-title text-sm">More Info</span>
              </div>
            )}
          </div>
          <div
            className="p-5 box-border bg-indigo-500 shadow-xl w-full h-card md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              className=" h-3/5  object-cover cursor-pointer self-center"
              src="https://v4.mui.com/static/logo.png"
              alt="projectImg"
            />
            <h1 className="font-bold text-3xl text-center">MEDICINE</h1>
            <p className="text-neutral-800 text-center font-semibold">
              ONLINE PHARMACY
            </p>
            {isShown && (
              <div className="w-full h-full absolute text-white top-0 left-0 bg-cardHover flex gap-4 items-center justify-center flex-col cursor-pointer z-20">
                <h1 className="font-semibold text-lg">Medicine</h1>
                <span className="text-title text-sm">More Info</span>
              </div>
            )}
          </div>
          <div
            className="p-5 box-border bg-indigo-500 shadow-xl w-full h-card md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              className=" h-3/5  object-cover cursor-pointer self-center"
              src="https://v4.mui.com/static/logo.png"
              alt="projectImg"
            />
            <h1 className="font-bold text-3xl text-center">MEDICINE</h1>
            <p className="text-neutral-800 text-center font-semibold">
              ONLINE PHARMACY
            </p>
            {isShown && (
              <div className="w-full h-full absolute text-white top-0 left-0 bg-cardHover flex gap-4 items-center justify-center flex-col cursor-pointer z-20">
                <h1 className="font-semibold text-lg">Medicine</h1>
                <span className="text-title text-sm">More Info</span>
              </div>
            )}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
