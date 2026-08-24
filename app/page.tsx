import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaBanner from "./components/HomeCtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CtaBanner />
      <Footer />
    </main>
  );
}
