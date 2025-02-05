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
import AboutLayout from "./Layouts/AppointmentLayout.tsx";
import AboutPage from "./pages/AppointmentPage.tsx";
import ShopLayout from "./Layouts/ShopLayout.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import ServicesLayout from "./Layouts/ServicesLayout.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ContactLayout from "./Layouts/ContactLayout.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Navbar from "./components/shared/Navbar.tsx";
import Footer from "./components/shared/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme appearance="inherit">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="/about" element={<AboutLayout />}>
              <Route index element={<AboutPage />} />
            </Route>
            <Route path="/shop" element={<ShopLayout />}>
              <Route index element={<ShopPage />} />
            </Route>
            <Route path="/services" element={<ServicesLayout />}>
              <Route index element={<ServicesPage />} />
            </Route>
            <Route path="/contact" element={<ContactLayout />}>
              <Route index element={<ContactPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Theme>
    </Provider>
  </StrictMode>
);
