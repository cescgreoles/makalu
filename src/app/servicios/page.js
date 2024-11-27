import Instalations from "@/components/Instalations";
import PresentationLi from "@/components/PresentationLi";
import ServiceSection from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <PresentationLi />
      <ServiceSection />
      <Instalations />
    </div>
  );
};

export default page;
