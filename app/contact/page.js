import Navbar from "../components/Navbar";
import PageHeader from "../components/about/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import LocationMap from "../components/contact/LocationMap";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        eyebrow="Get In Touch"
        titleLines={[
          { text: "Let's Build Something" },
          { text: "Extraordinary Together", highlight: true },
        ]}
        description="Have a project in mind or need expert advice? We'd love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        bgImage="/contacthero.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <LocationMap />
      <Footer />
    </main>
  );
}
