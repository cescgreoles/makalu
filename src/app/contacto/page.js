import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PresentationLi from "@/components/PresentationLi";
import Where from "@/components/Where";
import React from "react";

const page = () => {
  return (
    <div>
      <PresentationLi />
      <div className="vector-bg">
        <Where lat={41.3696848} lng={2.1409981} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
