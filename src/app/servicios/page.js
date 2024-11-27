import Footer from "@/components/Footer";
import Instalations from "@/components/Instalations";
import PresentationLi from "@/components/PresentationLi";
import ServiceSection from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <PresentationLi />

      <div className="vector-bg">
        <ServiceSection />
        <Instalations />
      </div>

      <Footer />
    </div>
  );
};

export default page;
