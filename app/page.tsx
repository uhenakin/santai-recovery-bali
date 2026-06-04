import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // PERUBAHAN: overflow-hidden diganti menjadi overflow-x-hidden
    <main className="bg-[#000000] min-h-screen w-full overflow-x-hidden flex flex-col">
      <Hero />
      <About />
      <Services /> 
      <Partnership />
      <Contact />
      <Footer />
    </main>
  );
}