import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import MembersSection from "./components/MembersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <MembersSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
