import React from "react";
import { blogs } from "../helpers/blogSource";

const Blog = () => {
  return (
    <main id="blog" className="bg-skill">
      <section className="container mx-auto p-5 ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">My Blog</h1>
          <p className="text-slate-800">Check out my latest blog posts</p>
        </article>
        <article className="flex justify-between flex-wrap ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-5 box-border  shadow-md w-full md:w-5/12 lg:w-medium xl:w-medium  flex flex-col gap-3 my-3 md:my-8 relative"
            >
              <div className="relative flex items-center justify-center h-40">
                <img
                  className=" h-full w-full object-cover cursor-pointer self-center"
                  src={blog.image}
                  alt="projectImg"
                />
                <span className="bg-title text-white py-0.5 text-xs px-3 w-fit absolute bottom-0 left-0">
                  {blog.date}
                </span>
              </div>
              <a href={blog.link} target="_blank" rel="noreferrer">
                <h1 className="font-bold text-lg">{blog.title}</h1>
              </a>

              <p className="text-gray-600 text-sm">{blog.description}</p>
              <p className="text-title text-sm">
                <span className=" font-semibold text-md  text-black">
                  Tags:{" "}
                </span>
                {blog.tags.join(", ")}
              </p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Blog;
