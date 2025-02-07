import Recommendation from "@/components/Recommendation";
import Services from "@/components/Services/Services";
import { Outlet } from "react-router";

const ServicesLayout = () => {
  return (
    <>
      <Outlet />
      <Services />
      <Recommendation />
    </>
  );
};

export default ServicesLayout;
