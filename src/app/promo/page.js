import Build_Website from "@/components/Home/Build_Website";
import Banner_Section from "@/components/promo/Banner_Section";
import Connectivity from "@/components/promo/Connectivity";
import FAQs from "@/components/promo/FAQs";
import Four_Icons from "@/components/promo/Four_Icons";
import Plans_Section from "@/components/promo/Plans_Section";
import Shared_hosting from "@/components/promo/Shared_hosting";
import Shared_hosting_features from "@/components/promo/Shared_hosting_features";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="sections_wrapper">
        <div className="sub-banner-section">
          <Banner_Section/>
        </div>
        <Four_Icons/>
        <Plans_Section/>
        <Shared_hosting/>
        <Shared_hosting_features/>
        <Connectivity/>
       <FAQs/>
        <Build_Website />
      </div>
    </>
  );
};

export default Page;
