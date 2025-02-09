import OurBrands from "@/components/OurBrands";
import ProductsComponent from "@/components/Products";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <>
      <Outlet />
      <ProductsComponent />
      <OurBrands />
    </>
  );
};

export default ShopLayout;
