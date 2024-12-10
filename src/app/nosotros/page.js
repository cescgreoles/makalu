import ContentSection from "@/components/ContentSection";

import "../../styles/page.css";
import React from "react";
import Footer from "@/components/Footer";
import PresentationLi from "@/components/PresentationLi";

const page = () => {
  return (
    <div>
      <PresentationLi />
      <div className="vector-bg">
        <ContentSection />
      </div>

      <Footer />
    </div>
  );
};

export default page;
