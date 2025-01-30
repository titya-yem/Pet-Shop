import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ContactLayout;
