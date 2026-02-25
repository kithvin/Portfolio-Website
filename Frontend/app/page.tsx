import Hero from "@/components/hero/page";
import About from "@/app/about/page";
import Project from "@/app/project/page";
import Navbar from "@/components/navbar/page";
import { Footer } from "@/components/footer/page";
import Skills from "@/app/skill/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />  
      <Project />
      <Footer />
    </>
  );
}
