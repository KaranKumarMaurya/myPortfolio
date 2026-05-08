// @flow strict
"use client";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import RevealOnScroll from "../../helper/reveal-on-scroll";

function AboutSection() {
  const highlightedTech = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Python",
    "Django",
    "Django REST Framework",
    "Flutter",
    "Firebase",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <div id="about" className="my-12 lg:my-16 relative group">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <RevealOnScroll delay={80} className="order-2 lg:order-1">
          <div>
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg space-y-4">
            <p>
              I build clean, scalable digital products for startups and growing
              businesses.
            </p>
            <p>
              My focus is backend architecture, cross-platform apps, API systems,
              and automation workflows that are practical and production-ready.
            </p>

            <div>
              <p className="mb-3 text-white font-medium">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {highlightedTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-md border border-[#2d325a] bg-[#10172d] text-[#d3d8e8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p>
              I deliver systems that are easy to scale, maintain, and evolve.
            </p>
          </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={180} className="order-1 lg:order-2">
          <div className="flex justify-center items-center">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Karan Kumar Maurya"
            className="rounded-lg transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 cursor-pointer object-cover"
          />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default AboutSection;
