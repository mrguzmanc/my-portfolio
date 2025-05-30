import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import Contact from "./components/ui/Contact";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
