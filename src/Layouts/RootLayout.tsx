import AboutSection from "@/components/shared/AboutSection";
import HeroCat from "@/components/HeroCat";
import { Outlet } from "react-router-dom";
import TopCategories from "@/components/category/TopCategories";
import Services from "@/components/Services/Services";
import Recommendation from "@/components/Recommendation";
import React from "react";
import OurBrands from "@/components/OurBrands";

const RootLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <HeroCat />
      <AboutSection />
      <TopCategories />
      <Services />
      <Recommendation />
      <OurBrands />
    </>
  );
};

export default RootLayout;
