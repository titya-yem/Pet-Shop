import AboutSection from "@/components/shared/AboutSection";
import HeroCat from "@/components/HeroCat";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";
import TopCategories from "@/components/category/TopCategories";
import Services from "@/components/Services";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <HeroCat />
      <AboutSection />
      <TopCategories />
      <Services />
    </>
  );
};

export default RootLayout;
