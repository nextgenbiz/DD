import Navbar from "../components/Navbar";
import PageHeader from "../components/about/PageHeader";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";
import OurApproach from "../components/about/OurApproach";
import CtaBanner from "../components/about/CtaBanner";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        eyebrow="Who We Are"
        titleLines={[
          { text: "Building With Vision." },
          { text: "Creating Lasting Impact.", highlight: true },
        ]}
        description="At DD Construction, we turn ideas into reality. With a commitment to quality, safety, and innovation, we deliver construction solutions that stand the test of time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/abouthero.png"
      />

      <OurStory />
      <OurValues />
      <OurApproach />

      <CtaBanner
        title="Let's Build Something Great Together"
        subtitle="Share your vision with us and let's create something extraordinary."
        buttonText="Get in Touch"
        buttonHref="/contact"
        accentBar
      />

      <Footer />
    </main>
  );
}
