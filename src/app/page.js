import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    // 102C57 - 26355D
    <main className="flex min-h-screen flex-col bg-[#131842] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AchievementsSection />
        <About />
        <ProjectsSection />
        <EmailSection />
        </div>
        <Footer />
    </main>
  );
}
