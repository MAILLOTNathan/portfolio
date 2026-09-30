import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Parcours from "@/components/Parcours";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Parcours />
      <Projects />
      <Hobbies />
      <Skills />
      <Contact />
    </>
  );
}
