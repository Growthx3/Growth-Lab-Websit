import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TypeformEmbed from "@/components/TypeformEmbed";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
      <TypeformEmbed />
    </main>
  );
}
