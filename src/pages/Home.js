import React from "react";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Action from "../components/Action";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="h-screen md:h-full w-full lg:w-10/12">
      <LandingPage />
      <About />
      <Skills />
      <Action />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
