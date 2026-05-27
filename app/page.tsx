import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
