import React from "react";

const Action = () => {
  return (
    <main className="bg-hire text-white p-2 sm:p-5 md:py-10">
      <section className="container flex flex-col items-start gap-2 md:gap-0 lg:flex-row lg:items-center mx-auto justify-between">
        <article>
          <h1 className="font-bold text-4xl">Let's work together!</h1>
          <p className="text-slate-400">
            I am available for fulltime or freelance projects. Hire me and get
            your project done.
          </p>
        </article>
        <button className="bg-title text-white font-semibold py-2 px-8 w-fit cursor-pointer rounded-3xl">
          Hire me
        </button>
      </section>
    </main>
  );
};

export default Action;
