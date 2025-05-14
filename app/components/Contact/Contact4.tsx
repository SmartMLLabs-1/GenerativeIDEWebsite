"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact4: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      id="relume"
      className="mt-[60px] px-[5%] py-16 md:py-24 lg:py-28"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container text-center"
      >
        <h2 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
          We're Here to Help
        </h2>
        <p className="mb-12 md:mb-18 lg:mb-20 md:text-md">
          Whether you have technical questions or business inquiries — drop us
          a message.
        </p>
        <form className="mx-auto grid max-w-2xl gap-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 p-3"
              type="text"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 p-3"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-gray-300 p-3"
              rows={5}
              placeholder="Tell us how we can help"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-[#222222] px-6 py-3 text-white hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export { Contact4 };
