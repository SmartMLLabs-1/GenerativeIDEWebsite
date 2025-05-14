"use client";

import React from "react";

const Contact25: React.FC = () => {
  return (
    <section
      id="relume"
      className=" px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container text-center">
        <h2 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
          Need More Help?
        </h2>
        <p className="mx-auto max-w-xl md:text-md">
          If you’re not sure who to contact or you need help using GenerativeIDE, we’re happy to guide you to the right place.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="mailto:help@generativeide.com"
            className="inline-block rounded bg-black px-8 py-4 text-white hover:bg-gray-800"
          >
            Email Support
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact25 };
