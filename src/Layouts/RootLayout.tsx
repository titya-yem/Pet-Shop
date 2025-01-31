import HeroCat from "@/components/HeroCat";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <HeroCat />
    </>
  );
};

export default RootLayout;
