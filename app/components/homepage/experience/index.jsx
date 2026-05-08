// @flow strict
'use client';
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsBriefcase } from "react-icons/bs";
import RevealOnScroll from "../../helper/reveal-on-scroll";

function Experience() {
  const journeyLabels = [
    "Current Chapter",
    "Company Building",
    "Experience Expansion",
    "Execution Sprint",
    "Foundation",
  ];

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pb-6">
        <p className="text-center text-sm md:text-base text-[#d3d8e8] max-w-3xl mx-auto px-2">
          A progression from hands-on engineering to product leadership and company
          building, focused on shipping scalable systems.
        </p>
      </div>

      <div className="relative mt-4">
        <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-violet-500/80 to-transparent"></div>

        <div className="flex flex-col gap-6 md:gap-10">
          {experiences.map((experience, index) => {
            const isRight = index % 2 !== 0;
            return (
              <RevealOnScroll key={experience.id} delay={index * 100}>
                <div className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div className={`hidden md:block ${isRight ? "order-1" : "order-2"}`}></div>

                  <div
                    className={`relative ml-14 md:ml-0 ${isRight ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"}`}
                  >
                    <div className="group relative overflow-hidden rounded-xl border border-[#2a2e5a] bg-[linear-gradient(135deg,#101123_0%,#0f1635_100%)] p-5 md:p-6 transition-all duration-300 hover:border-violet-500/70 hover:-translate-y-1">
                      <Image
                        src="/blur-23.svg"
                        alt="blur"
                        width={800}
                        height={220}
                        className="absolute bottom-0 left-0 opacity-60 pointer-events-none"
                      />

                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <span className="text-[11px] md:text-xs uppercase tracking-wider text-[#16f2b3] bg-[#102a29] px-2.5 py-1 rounded-md border border-[#1f5d57]">
                          {journeyLabels[index] || "Growth"}
                        </span>
                        <span className="text-xs md:text-sm text-[#16f2b3]">{experience.duration}</span>
                      </div>

                      <div className="relative z-10 mt-4 flex items-start gap-4">
                        <div className="mt-0.5 text-violet-400 transition-transform duration-300 group-hover:scale-110">
                          <BsBriefcase size={24} />
                        </div>
                        <div>
                          <p className="text-base md:text-lg font-semibold text-white leading-snug">
                            {experience.title}
                          </p>
                          <p className="text-sm md:text-base text-[#d3d8e8] mt-1">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2">
                    <div className="h-4 w-4 rounded-full border-2 border-violet-400 bg-[#0d1224] shadow-[0_0_12px_rgba(139,92,246,0.7)]"></div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;