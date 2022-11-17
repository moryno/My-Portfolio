import React from "react";
import { skillRows } from "../helpers/skillSource";

const Skills = () => {
  return (
    <main className="bg-skill">
      <section className="container mx-auto p-5 ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">My Skills</h1>
          <p className="text-slate-800">
            I am a creative problem solver. I build fullstack web applications.
            I use React, TypeScript, JavaScript, Node.js, MongoDB, SQL, HTML,
            and CSS. I have highlighted my key technical skills that I will
            bring to your project.
          </p>
        </article>
        <article className="flex justify-between flex-wrap ">
          {skillRows.map((skill) => (
            <div
              key={skill.id}
              className="p-5 box-border shadow-xl w-full  md:w-5/12 lg:w-medium xl:w-medium bg-white flex flex-col gap-3 my-3 md:my-8"
            >
              <img
                className=" h-40  object-cover cursor-pointer self-center"
                src={skill.img}
                alt="cardImg"
              />
              <h1 className="font-medium text-lg text-center">{skill.title}</h1>
              <p className="text-gray-400">{skill.text}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Skills;
