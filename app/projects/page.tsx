import Navbar from "../components/Navbar";
import PageHeader from "../components/about/PageHeader";
import ProjectsExplorer from "../components/project/ProjectsExplorer";
import CtaBanner from "../components/about/CtaBanner";
import Footer from "../components/Footer";
import { PROJECTS } from "../components/project/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHeader
        eyebrow="Our Projects"
        titleLines={[
          { text: "Building Spaces" },
          { text: "That Inspire", highlight: true },
        ]}
        description="Explore our diverse portfolio of successful construction projects. Each project is a testament to our commitment to quality, innovation, and client satisfaction."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bgImage="/projecthero.jpg"
      />

      <ProjectsExplorer projects={PROJECTS} />

      <CtaBanner
        title="Have A Project In Mind?"
        subtitle="Let's work together to bring your vision to life with our expertise and dedication."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
