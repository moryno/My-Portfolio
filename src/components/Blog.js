import React from "react";

const Blog = () => {
  return (
    <main className="bg-skill">
      <section className="container mx-auto p-5 ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">My Blog</h1>
          <p className="text-slate-800">Check out my latest blog posts</p>
        </article>
        <article className="flex justify-between flex-wrap ">
          <div className="p-5 box-border  shadow-xl w-full md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative">
            <div className="relative flex items-center justify-center h-40">
              <img
                className=" h-full w-full object-cover cursor-pointer self-center"
                src="https://v4.mui.com/static/logo.png"
                alt="projectImg"
              />
              <span className="bg-title text-white py-0.5 text-xs px-3 w-fit absolute bottom-0 left-0">
                15 Nov, 19
              </span>
            </div>
            <h1 className="font-bold text-lg">Introduction To UX/UI</h1>
            <p className="text-gray-400 text-sm">
              I am a creative problem solver. I build fullstack web
              applications.
            </p>
            <p className="text-title text-sm">
              <span className=" font-semibold text-md  text-black">Tags: </span>
              UI
            </p>
          </div>
          <div className="p-5 box-border  shadow-xl w-full md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative">
            <div className="relative flex items-center justify-center h-40">
              <img
                className=" h-full w-full object-cover cursor-pointer self-center"
                src="https://v4.mui.com/static/logo.png"
                alt="projectImg"
              />
              <span className="bg-title text-white py-0.5 text-xs px-3 w-fit absolute bottom-0 left-0">
                15 Nov, 19
              </span>
            </div>
            <h1 className="font-bold text-lg">Introduction To UX/UI</h1>
            <p className="text-gray-400 text-sm">
              I am a creative problem solver. I build fullstack web
              applications.
            </p>
            <p className="text-title text-sm">
              <span className=" font-semibold text-md  text-black">Tags: </span>
              UI
            </p>
          </div>
          <div className="p-5 box-border  shadow-xl w-full md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative">
            <div className="relative flex items-center justify-center h-40">
              <img
                className=" h-full w-full object-cover cursor-pointer self-center"
                src="https://v4.mui.com/static/logo.png"
                alt="projectImg"
              />
              <span className="bg-title text-white py-0.5 text-xs px-3 w-fit absolute bottom-0 left-0">
                15 Nov, 19
              </span>
            </div>
            <h1 className="font-bold text-lg">Introduction To UX/UI</h1>
            <p className="text-gray-400 text-sm">
              I am a creative problem solver. I build fullstack web
              applications.
            </p>
            <p className="text-title text-sm">
              <span className=" font-semibold text-md  text-black">Tags: </span>
              UI
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Blog;
