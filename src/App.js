import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServiceSection";
import MembersSection from "./components/MemberSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <MembersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
