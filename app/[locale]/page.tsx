import NavBar from "@/components/core/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Branch from "@/components/sections/Branch";
import Course from "@/components/sections/Course";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Instructors from "@/components/sections/Instructors";
import Gallery from "@/components/sections/Gallery";

export default async function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Branch />
      <Course />
      <Instructors />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
