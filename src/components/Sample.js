import { useGlobalState } from "./GlobalStateProvider";
import Banner_Section from "./Home/Banner_Section";
import Blog_Section_Popup from "./Home/Blog_Section_Popup";
import Build_Website from "./Home/Build_Website";
import Choose_ZThosting from "./Home/Choose_ZThosting";
import Connectivity from "./Home/Connectivity";
import Customer from "./Home/Customer";
import Data_Center_Location from "./Home/Data_Center_Location";
import Domain_Section from "./Home/Domain_Section";
import Ip_Moniter_Support from "./Home/Ip_Moniter_Support";
import Plans_Section from "./Home/Plans_Section";
import Recently_Posts from "./Home/Recently_Posts";
import Web_Hosting_Section from "./Home/Web_Hosting_Section";
import Plans_Sample from "./Home/Plans_Sample";

export default function Sample() {
  return (
    <>
      <main  className="sections_wrapper">
        <Banner_Section/>
       <Domain_Section/>
      <Plans_Section/>
      </main>
     <Web_Hosting_Section/>
     <Choose_ZThosting/>
      <main className="sections_wrapper">
       <Data_Center_Location/>
       <Ip_Moniter_Support/>
        <Connectivity/>
        <Customer/>
        {/* <Plans_Sample/> */}
        <Recently_Posts/>
       {/* <Build_Website/> */}
      </main>
      <Blog_Section_Popup/>
    </>
  );
}
