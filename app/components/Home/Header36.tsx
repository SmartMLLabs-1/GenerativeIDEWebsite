"use client";

import {
  Button,
  Input,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";
import CodeAnimation from "./CodeAnimation";

const useForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email });
  };

  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

const Header36: React.FC = () => {
  const formState = useForm();

  return (
    <section
      id="relume"
      className="mt-[80px] grid min-h-screen grid-cols-1 items-stretch gap-y-16 px-[5%] pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      {/* Left: Text + Form */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center h-full max-w-xl w-full px-4 lg:px-8"
      >
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Experience the Future of Offline AI
        </h1>
        <p className="md:text-md">
          Introducing GenerativeIDE, the world's first fully offline AI. Enjoy
          unparalleled security, speed, and reliability with our innovative
          technology.
        </p>
        <div className="mt-6 max-w-sm md:mt-8">
          <form
            onSubmit={formState.handleSubmit}
            className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={formState.email}
              onChange={formState.handleSetEmail}
              className="min-w-[300px] sm:min-w-[200px] md:min-w-[400px] lg:min-w-[300px] rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 px-5 py-3 h-12 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <Button
              title="SignUp For Early Access"
              size="primary"
              className="h-10 rounded-md bg-white text-black hover:bg-white/90 px-4 py-2 text-sm font-medium transition whitespace-nowrap"
            >
              SignUp For Early Access
            </Button>
          </form>
          <p className="mt-3 text-xs text-white/70">
            By clicking Sign Up, you confirm your agreement with our Terms and Conditions.
          </p>
        </div>
      </motion.div>

      {/* Right: Code Animation */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-full w-full flex items-center justify-center p-4"
      >
        <div className="h-full w-full">
          <CodeAnimation />
        </div>
      </motion.div>
    </section>
  );
};

export { Header36 };
