import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_skvzar1",
        "template_2ox9rmi",
        formRef.current,
        "2zKK-EKLfrPe0NirY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main id="contact" className="w-full">
      <section className="container mx-auto p-5 md:py-20  ">
        <article>
          <h1 className="font-bold text-2xl md:text-4xl">Get in touch</h1>
          <p className="text-slate-800">Feel free to contact me anytime</p>
        </article>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-wrap mt-5 flex-col lg:flex-row items-center gap-5"
        >
          <input
            className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
            type="text"
            name="user_name"
            placeholder="Full Name"
          />
          <input
            className="p-2 w-full lg:w-formLg xl:w-form ring-gray-300 ring-1 rounded-sm"
            type="email"
            name="user_email"
            placeholder="Email"
          />

          <input
            className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
            type="text"
            name="user_subject"
            placeholder="Subject"
          />
          <textarea
            className="p-2 min-w-full ring-gray-300 ring-1 rounded-sm"
            cols="30"
            name="message"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <button className="bg-title text-white font-semibold py-2 px-8 w-fit cursor-pointer rounded-3xl">
            Send message
          </button>
          {success && (
            <span className=" text-green-500 p-3 ring-1 rounded-md ring-green-500 w-fit">
              Mail sent. Thank you.
            </span>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
