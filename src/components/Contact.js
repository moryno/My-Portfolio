import React from "react";

const Contact = () => {
  return (
    <main className="w-full">
      <section className="container mx-auto p-5 md:py-20  ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">Get in touch</h1>
          <p className="text-slate-800">Feel free to contact me anytime</p>
        </article>

        <form className="w-full flex flex-wrap mt-5 flex-col lg:flex-row items-center gap-5">
          <input
            className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
            type="email"
            placeholder="Email"
          />

          <input
            className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <button className="bg-title text-white font-semibold py-2 px-8 w-fit cursor-pointer rounded-3xl">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
