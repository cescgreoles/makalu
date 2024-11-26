import ContentSection from "@/components/ContentSection";
import PresentationLi from "../../components/PresentationLi";
import "../../styles/page.css";
import React from "react";
import Footer from "@/components/Footer";

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
