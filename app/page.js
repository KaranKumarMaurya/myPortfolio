'use client';

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (!isClient) return;

  //   const getData = async () => {
  //     try {
  //       const res = await fetch(`https://dev.to/api/articles/latest?username=${personalData.devUsername}`);
        
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
        
  //       const data = await res.json();
  //       const filtered = data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5);
  //       setBlogs(filtered);
  //     } catch (error) {
  //       console.error("Failed to fetch blogs:", error);
  //       // Set empty array as fallback
  //       setBlogs([]);
  //     }
  //   };

  //   getData();
  // }, [isClient]);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      {/* <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
    </div>
  );
}