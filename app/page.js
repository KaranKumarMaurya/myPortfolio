import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  let blogs = [];

  try {
    const res = await fetch(`https://dev.to/api/articles/latest?username=${personalData.devUsername}`, {
      cache: "no-store", // disables caching
    });

    if (res.ok) {
      const data = await res.json();
      blogs = data
        .filter((item) => item?.cover_image)
        .sort(() => Math.random() - 0.5); // optional shuffle
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  );
}
