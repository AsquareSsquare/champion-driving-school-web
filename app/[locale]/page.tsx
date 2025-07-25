import NavBar from "@/components/core/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Branch from "@/components/sections/Branch";
import Course from "@/components/sections/Course";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default async function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Branch />
      <Course />
      {/*TODO: Instructor Section*/}
      {/*TODO: Gallery Section*/}
      <Contact />
      <Footer />
    </>
  );
}
