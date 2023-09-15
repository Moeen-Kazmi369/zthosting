import Banner_Section from "@/components/Domains/Banner_Section";
import FAQs_Section from "@/components/Domains/FAQs_Section";
import HotlineSerious from "@/components/Domains/HotlineSerious";
import Popular_Domains from "@/components/Domains/Popular_Domains";
import PriceDomains from "@/components/Domains/PriceDomains";
import RegistorReason from "@/components/Domains/RegistorReason";
import Build_Website from "@/components/Home/Build_Website";
import React from "react";

const Page = () => {
  return (
    <div className="sections_wrapper">
      <div className="sub-banner-section">
        <Banner_Section/>
      </div>
      <Popular_Domains/>
      <RegistorReason/>
      <PriceDomains/>
      <HotlineSerious/>
      <FAQs_Section/>
      <Build_Website/>
    </div>
  );
};

export default Page;
