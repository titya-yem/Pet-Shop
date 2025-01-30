import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ServicesLayout;
