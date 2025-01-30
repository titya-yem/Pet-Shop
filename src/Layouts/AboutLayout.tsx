import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <>
    <Navbar />
      <Outlet />
    </>
  );
};

export default AboutLayout;
