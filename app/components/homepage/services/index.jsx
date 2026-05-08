// @flow strict
"use client";

import { servicesData } from "@/utils/data/services-data";

function Services() {
  return (
    <div id="services" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="text-[#d3d8e8] text-sm lg:text-base text-center max-w-4xl mx-auto px-2">
        I help teams build growth-ready digital systems with strong backend architecture,
        workflow automation, and product integrations built for scale.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mt-10">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="rounded-lg border border-[#1f223c] bg-[#11152c] p-5 lg:p-6"
          >
            <h3 className="text-[#16f2b3] text-lg font-semibold">{service.title}</h3>
            <p className="text-[#d3d8e8] text-sm mt-3 leading-relaxed">{service.summary}</p>

            <div className="mt-5">
              <p className="text-white text-sm font-medium mb-2">Core Deliverables</p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-[#d3d8e8] text-sm">
                {service.offerings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-white text-sm font-medium mb-2">Preferred Stack</p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded border border-[#2d325a] text-[#d3d8e8] bg-[#0d1224]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
