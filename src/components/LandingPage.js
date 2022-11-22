import React from "react";
import LandingImg from "../images/photo.jpg";
import Typical from "react-typical";

const LandingPage = () => {
  return (
    <main className="flex h-1/2 md:h-96 lg:h-screen">
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
            <Typical
              loop={Infinity}
              wrapper="s"
              steps={[
                "FullStack Developer",
                1000,
                "Freelancer",
                1000,
                "Mobile Developer",
                1000,
              ]}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default LandingPage;
