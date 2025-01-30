import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ShopLayout;
