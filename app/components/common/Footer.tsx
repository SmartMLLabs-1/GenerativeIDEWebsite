"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer4: React.FC = () => {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <Link to="/" className="text-xl font-bold text-white lg:justify-self-start">
            GenerativeIDE
          </Link>

          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/features">Features</Link>
            </li>
            {/* <li className="font-semibold">
              <Link to="/about-us">About</Link>
            </li> */}
            <li className="font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li className="font-semibold">
              <Link to="/blog">Blog</Link>
            </li> */}
          </ul>

          <div className="flex items-start justify-start gap-x-3 lg:justify-self-end">
            <a href="#" aria-label="Facebook">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#" aria-label="Twitter / X">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#" aria-label="YouTube">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col-reverse items-center justify-center gap-y-4 pt-6 text-sm text-white md:flex-row md:gap-x-6 md:pt-8">
          <p>© 2025 GenerativeIDE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer4 };
