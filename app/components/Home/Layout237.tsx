"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const Layout237: React.FC = () => {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-32 lg:py-36 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Explore</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Unlock the Power of Offline AI Today
          </h2>
          <p className="text-base md:text-lg max-w-2xl text-white/70">
            GenerativeIDE is designed to empower users with a fully offline AI experience.
            Follow these simple steps to get started and unleash your creativity.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12">
          {[
            {
              title: "Install GenerativeIDE on Your Device",
              desc: "Download the installation package from our website.",
            },
            {
              title: "Set Up Your Workspace",
              desc: "Configure your workspace to suit your needs.",
            },
            {
              title: "Start Creating with GenerativeIDE",
              desc: "Begin your creative journey with our intuitive tools.",
            },
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              {/* Step Number in Circle */}
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-white text-lg font-semibold">
                {idx + 1}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                Step {idx + 1}: {title}
              </h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Layout237 };
