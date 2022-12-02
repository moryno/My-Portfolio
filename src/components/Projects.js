import React, { useState } from "react";
import Portal from "./Portal";
import { projects } from "../helpers/projectSource";

const Projects = () => {
  const [isShown, setShow] = useState(false);
  const [filteredProject, setFilteredProject] = useState({});

  const showPortal = (id) => {
    projects.filter((project) => {
      if (project.id === id) {
        setFilteredProject(project);
      }
    });
    setShow(true);
  };

  return (
    <main id="projects">
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
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className={`p-5 group/item box-border  shadow-xl w-full h-card md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative`}
                style={{ backgroundColor: `${project.bg}` }}
              >
                <img
                  className=" h-3/5  cursor-pointer self-center"
                  src={project.image}
                  alt="projectImg"
                />
                <h1 className="font-bold text-3xl  text-center">
                  {project.title.toUpperCase()}
                </h1>
                <p className="text-neutral-800 text-center font-semibold">
                  {project.label.toUpperCase()}
                </p>

                <div className="w-full invisible group-hover/item:visible h-full absolute text-white top-0 left-0 bg-cardHover flex gap-4 items-center justify-center flex-col cursor-pointer  z-20">
                  <h1 className="font-semibold text-lg">{project.title}</h1>
                  <span
                    className="text-title text-sm transition ease-in-out hover:scale-110 "
                    onClick={() => showPortal(project.id)}
                  >
                    More Info
                  </span>
                </div>
              </div>
            );
          })}
        </article>
      </section>
      <Portal
        project={filteredProject}
        isShown={isShown}
        onClose={() => setShow(false)}
      />
    </main>
  );
};

export default Projects;
