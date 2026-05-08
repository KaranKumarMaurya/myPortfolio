// @flow strict

'use client';

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsMortarboard } from "react-icons/bs";
import RevealOnScroll from "../../helper/reveal-on-scroll";

function Education() {
  const getPhaseLabel = (title) => {
    const normalized = title.toLowerCase();
    if (normalized.includes("bachelor") || normalized.includes("btech")) return "Highest Qualification";
    if (normalized.includes("jee")) return "Competitive Track";
    if (normalized.includes("intermediate")) return "Pre-University";
    if (normalized.includes("high school")) return "School Foundation";
    return "Academic Milestone";
  };

  const orderedEducations = educations;

  const rowSize = 3;
  const rows = [];
  for (let i = 0; i < orderedEducations.length; i += rowSize) {
    rows.push(orderedEducations.slice(i, i + rowSize));
  }

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pb-6">
        <p className="text-center text-sm md:text-base text-[#d3d8e8] max-w-3xl mx-auto px-2">
          The academic path behind my engineering discipline, product thinking, and
          execution mindset.
        </p>
      </div>

      <div className="relative py-6">
        <div className="pointer-events-none absolute -top-2 left-8 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="pointer-events-none absolute top-10 right-8 h-28 w-28 rounded-full bg-pink-500/10 blur-3xl"></div>

        <div className="hidden md:flex flex-col gap-10">
          {rows.map((row, rowIndex) => {
            const displayRow = rowIndex % 2 === 0 ? row : [...row].reverse();
            const rowConnectsDown = rowIndex < rows.length - 1;
            const endpointOnRight = rowIndex % 2 === 0;

            return (
              <div key={`row-${rowIndex}`} className="relative">
                <div className="absolute left-0 right-0 top-[6.7rem] h-[2px] bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"></div>

                <div className="grid grid-cols-3 gap-6 relative">
                  {displayRow.map((education, cardIndex) => {
                    const isHighest = getPhaseLabel(education.title) === "Highest Qualification";
                    const isEndCard = cardIndex === displayRow.length - 1;

                    return (
                      <RevealOnScroll key={education.id} delay={(rowIndex * 3 + cardIndex) * 90}>
                        <div className="relative">
                        <div
                          className={`group relative h-full min-h-[210px] rounded-xl border bg-[linear-gradient(140deg,#101123_0%,#0f1635_100%)] p-5 text-white transition-all duration-300 hover:-translate-y-1.5 ${
                            isHighest
                              ? "border-violet-400/80 shadow-[0_0_24px_rgba(139,92,246,0.18)]"
                              : "border-[#2a2e5a] hover:border-violet-500/70"
                          }`}
                        >
                          <Image
                            src="/blur-23.svg"
                            alt="blur"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 left-0 opacity-60 pointer-events-none select-none"
                          />

                          <div className="relative z-10 flex items-center justify-between gap-3">
                            <span
                              className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                                isHighest
                                  ? "text-[#e9ddff] bg-[#32215a] border-[#7a56c5]"
                                  : "text-[#16f2b3] bg-[#102a29] border-[#1f5d57]"
                              }`}
                            >
                              {getPhaseLabel(education.title)}
                            </span>
                            <span className="text-xs text-[#16f2b3]">{education.duration}</span>
                          </div>

                          <div className="relative z-10 mt-4 flex items-start gap-4">
                            <div className="mt-0.5 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                              <BsMortarboard size={22} />
                            </div>
                            <div>
                              <p className="text-base font-semibold leading-snug tracking-wide">
                                {education.title}
                              </p>
                              <p className="text-sm text-[#d3d8e8] mt-1">
                                {education.institution}
                              </p>
                              <p className="text-xs text-violet-300 mt-2">
                                Grade: {education.grade || "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="absolute -bottom-[1.5rem] left-1/2 -translate-x-1/2">
                          <div
                            className={`h-4 w-4 rounded-full border-2 bg-[#0d1224] shadow-[0_0_12px_rgba(139,92,246,0.7)] ${
                              isHighest ? "border-pink-400 animate-pulse" : "border-violet-400"
                            }`}
                          ></div>
                        </div>

                        {isEndCard && rowConnectsDown && (
                          <div
                            className={`absolute top-[6.7rem] ${
                              endpointOnRight ? "-right-3" : "-left-3"
                            } flex flex-col items-center`}
                          >
                            <div className="h-10 w-[2px] bg-gradient-to-b from-violet-400/80 to-transparent"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-violet-300/70"></div>
                          </div>
                        )}
                        </div>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden flex flex-col gap-5 px-1">
          {orderedEducations.map((education, idx) => {
            const isHighest = getPhaseLabel(education.title) === "Highest Qualification";

            return (
              <RevealOnScroll key={`mobile-${education.id}`} delay={idx * 90}>
                <div className="relative">
                <div
                  className={`group relative rounded-xl border bg-[linear-gradient(140deg,#101123_0%,#0f1635_100%)] p-5 text-white transition-all duration-300 ${
                    isHighest ? "border-violet-400/80" : "border-[#2a2e5a]"
                  }`}
                >
                  <Image
                    src="/blur-23.svg"
                    alt="blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-60 pointer-events-none select-none"
                  />

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span
                      className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        isHighest
                          ? "text-[#e9ddff] bg-[#32215a] border-[#7a56c5]"
                          : "text-[#16f2b3] bg-[#102a29] border-[#1f5d57]"
                      }`}
                    >
                      {getPhaseLabel(education.title)}
                    </span>
                    <span className="text-xs text-[#16f2b3]">{education.duration}</span>
                  </div>

                  <div className="relative z-10 mt-4 flex items-start gap-4">
                    <div className="mt-0.5 text-violet-400">
                      <BsMortarboard size={22} />
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-snug">{education.title}</p>
                      <p className="text-sm text-[#d3d8e8] mt-1">{education.institution}</p>
                      <p className="text-xs text-violet-300 mt-2">
                        Grade: {education.grade || "N/A"}
                      </p>
                    </div>
                  </div>
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

export default Education;