import React from "react";
import LandingImg from "../images/phot.jpg";
import { Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
  return (
    <main id="home" className="flex h-1/2 md:h-96 lg:h-screen">
      <section className="flex items-center  justify-center w-full  bg-gradient-to-r from-neutral-600 to-neutral-600 relative">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src={LandingImg}
          alt="landingImage"
        />
        <article className="p-5">
          <h1 className="font-bold text-2xl md:text-5xl mb-2 text-white relative">
            Maurice <span className=" text-title">Nganga</span>
          </h1>
          <div className="font-bold text-white text-2xl md:text-2xl relative">
            I'm a{" "}
            <Typewriter
              words={[
                "FullStack Developer",
                "Freelancer",
                "Writer",
                "Mobile Developer",
              ]}
              loop={Infinity}
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button className="bg-button self-center text-white font-semibold py-2 px-3 w-fit cursor-pointer transition ease-in-out hover:scale-110  relative my-5">
            <a href={`#contact`}>Hire me </a>
          </button>
        </article>
      </section>
    </main>
  );
};

export default LandingPage;
