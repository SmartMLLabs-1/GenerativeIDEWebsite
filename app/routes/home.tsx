import React from "react";

import { Header36 } from "../components/Home/Header36";
import { Layout238 } from "../components/Home/Layout238";
import { Layout237 } from "../components/Home/Layout237";
import { Layout101 } from "../components/Home/Layout101";
import { Testimonial6 } from "../components/Home/Testimonial6";
import { Cta3 } from "../components/Home/Cta3";
import { Layout4 } from "../components/Home/Layout4";
import { Navbar3 } from "../components/common/Navbar";
import { Footer4 } from "../components/common/Footer";


const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar3 />
      <Header36 />
      <Layout238 />
      <Layout4 />
      <Layout237 />
      <Layout101 />
      <Testimonial6 />
      {/* <Cta3 /> */}
      <Footer4 />
    </div>
  );
};

export default HomePage;
