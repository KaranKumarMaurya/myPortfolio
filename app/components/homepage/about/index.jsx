// @flow strict
"use client";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <div className="text-gray-200 text-sm lg:text-lg space-y-4">
            <p>
              I’m Karan, a full-stack mobile and web developer who blends clean
              code with product thinking.
            </p>
            <p>
              From building BLE-powered IoT apps to launching real-time location
              trackers and healthcare platforms — I’ve worked on high-impact
              projects that solve real-world problems.
            </p>
            <div>
              <p className="mb-2">I specialize in:</p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>
                  <strong>Flutter</strong> and <strong>React Native</strong> for
                  cross-platform app development
                </li>
                <li>
                  <strong>Node.js</strong>, <strong>Firebase</strong>, and{" "}
                  <strong>AWS</strong> for backend and cloud
                </li>
                <li>
                  Real-time features like <strong>location tracking</strong>,{" "}
                  <strong>BLE</strong>, <strong>Stripe</strong>,{" "}
                  <strong>FCM</strong>, <strong>Twilio</strong>, and{" "}
                  <strong>Zapier</strong>
                </li>
              </ul>
            </div>

            <p>
              Whether it’s launching MVPs, scaling startup platforms, or helping
              clients bring bold ideas to life — I don’t just write code, I
              build digital products that <em>work</em>.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Karan Kumar Maurya"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
