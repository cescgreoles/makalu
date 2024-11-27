import ContactForm from "@/components/ContactForm";
import PresentationLi from "@/components/PresentationLi";
import Where from "@/components/Where";
import React from "react";

const page = () => {
  return (
    <div>
      <PresentationLi />
      <div className="vector-bg">
        <ContactForm />
        <Where lat={41.3696848} lng={2.1409981} />
      </div>
    </div>
  );
};

export default page;
