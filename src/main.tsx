import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import HomePage from "./pages/HomePage.tsx";
import RootLayout from "./Layouts/RootLayout.tsx";
import { Theme } from "@radix-ui/themes";
import AppointmentPage from "./pages/AppointmentPage.tsx";
import ShopLayout from "./Layouts/ShopLayout.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import ServicesLayout from "./Layouts/ServicesLayout.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Navbar from "./components/shared/Navbar.tsx";
import Footer from "./components/shared/Footer.tsx";
import ProductDetailPage from "./components/ProductDetials.tsx";
import Cart from "./components/Cart.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import ScrollToTop from "./components/ScrollToTop.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Provider store={store}>
        <Theme appearance="inherit">
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/appointment" element={<AppointmentPage />} />
              <Route path="/shop" element={<ShopLayout />}>
                <Route index element={<ShopPage />} />
                <Route path=":slug" element={<ProductDetailPage />} />
              </Route>
              <Route path="/services" element={<ServicesLayout />}>
                <Route index element={<ServicesPage />} />
              </Route>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Theme>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);
