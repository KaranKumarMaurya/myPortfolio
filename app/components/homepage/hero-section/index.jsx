'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Side Terminal UI */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="text-pink-500">const</span>&nbsp;
                <span className="text-white">developer</span>&nbsp;
                <span className="text-pink-500">=</span>&nbsp;
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-white">name:</span>&nbsp;
                <span className="text-gray-400">&#39;</span>
                <span className="text-amber-300">Karan Kumar Maurya</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-white">skills:</span>&nbsp;
                <span className="text-gray-400">[</span>
                <span className="text-amber-300">&#39;Flutter&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Firebase&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;AWS&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;React Native&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Node.js&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;BLE&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Stripe&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Twilio&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Google Analytics&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;GitHub&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Airbyte&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Snowflake&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;DBT Cloud&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Lightdash&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Forest Admin&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Pipedrive&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Calendly&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Zapier&#39;</span>,&nbsp;
                <span className="text-amber-300">&#39;Zendesk&#39;</span>
                <span className="text-gray-400">],</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-white">hardWorker:</span>
                &nbsp;<span className="text-orange-400">true</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-white">quickLearner:</span>
                &nbsp;<span className="text-orange-400">true</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-white">problemSolver:</span>
                &nbsp;<span className="text-orange-400">true</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-green-400">hireable:</span>
                &nbsp;<span className="text-orange-400">function</span> <span className="text-gray-400">() {"{"}</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">return</span> (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">hardWorker</span> &amp;&amp;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">problemSolver</span> &amp;&amp;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">skills.length</span> &gt;= <span className="text-orange-400">5</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;);
              </div>
              <div>&nbsp;&nbsp;<span className="text-gray-400">{"}"};</span></div>
              <div><span className="text-gray-400">{"}"};</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
