import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const AppointmentLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AppointmentLayout;
