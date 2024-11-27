import PresentationLi from "@/components/PresentationLi";
import Prices from "@/components/Prices";
import React from "react";
import "../../styles/page.css";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <PresentationLi />
      <div className="vector-bg">
        <Prices />
      </div>
      <Footer />
    </div>
  );
};

export default page;
