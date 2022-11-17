import React from "react";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Action from "../components/Action";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <main className="h-screen w-full lg:w-10/12">
      <LandingPage />
      <About />
      <Skills />
      <Action />
      <Projects />
      <Blog />
    </main>
  );
};

export default Home;
