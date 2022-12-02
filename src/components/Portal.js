import React from "react";
import { createPortal } from "react-dom";

const Portal = ({ isShown, onClose, project }) => {
  if (!isShown) return;

  return createPortal(
    <main className="w-full  md:h-screen md:w-screen fixed top-0 bg-white left-0  opacity-0.9 flex items-center justify-center z-40 ">
      <span
        className="text-2xl text-gray-400 absolute cursor-pointer top-3 right-3 lg:top-5 lg:right-10 z-50  xl:right-20"
        onClick={onClose}
      >
        X
      </span>
      <section className="container  mx-auto p-5 md:py-20  ">
        <article className="w-full flex mt-5 flex-col lg:flex-row items-center gap-5 md:gap-20">
          <article className="lg:w-5/12 flex items-center justify-center ">
            <img
              className=" object-cover"
              src={project.image}
              alt="projectImage"
            />
          </article>
          <article className="lg:w-7/12 flex flex-col justify-center">
            <h1 className="text-black text-4xl mb-2 font-semibold">
              {project.title}
            </h1>
            <p className="text-slate-600 py-5">{project.description}</p>
            <p className="text-slate-600 pb-5">{project.development}</p>

            <hr />
            <div className="py-5 flex flex-wrap justify-between w-full">
              <div className="w-1/2 my-1">
                <p className=" font-semibold text-md">Project: </p>{" "}
                {project.title}
              </div>{" "}
              <p className="w-1/2 my-1  text-title">
                <span className=" font-semibold text-md  text-black">
                  Categories:{" "}
                </span>
                {project.categories}
              </p>{" "}
              <div className="w-1/2 my-1">
                <p className=" font-semibold text-md">Technologies: </p>
                <span className="text-title">
                  {project.technologies.join(", ")}
                </span>
              </div>
            </div>
            <div className="flex gap-10 mt-3">
              <button className="bg-title text-white font-semibold py-2 px-3 w-fit cursor-pointer rounded-3xl">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              </button>
              <button className="py-2 px-3 font-semibold w-fit cursor-pointer rounded-3xl ring-1 ring-slate-400">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Source Code
                </a>
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
