import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services/>
      <Contact />
      <Testimonials />
      <Footer/>
    </main>
  );
}