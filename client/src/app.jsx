// App.jsx
import AIAgentsAutomation from "./ai-agents-automation";
import Branding from "./Branding";
import ConversionRateOptimization from "./Conversion";
import DigitalMarketing from "./Digital";
import EcommerceWebsites from "./ECommerce";

import GoHighLevelCRM from "./goHigh";
import GoogleAdsManagement from "./google-ads";
import GrowthFlowMedia from "./GrowthFlowMedia";
import ManagedHosting from "./Hosting";
import LeadGeneration from "./lead-generation";
import Hosting from "./managed-hosting";
import MetaAdsManagement from "./meta-ads";
import ServiceWebsites from "./service-websites";

import WebDesignDevelopment from "./Web";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WhiteLabelMarketing from "./whiteLabel";
import SEO from "./seo";
import Contact from "./Contact";
import FormSubmissionConfirmation from "./SuccessPage";


function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<GrowthFlowMedia/>}/>
      <Route path="/success-page" element={<FormSubmissionConfirmation/>}/>

      <Route path="/hosting" element={<Hosting/>}/>
      <Route path="/gohigh" element={<GoHighLevelCRM/>}/>
      <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>

      
      <Route path="/webdesign" element={<WebDesignDevelopment/>}/>
      <Route path="/conversionrate" element={<ConversionRateOptimization/>}/>
      <Route path="/webdesign" element={<WebDesignDevelopment/>}/>
       <Route path="/branding&logodesign" element={<Branding/>}/>
       <Route path="/ecommerce" element={<EcommerceWebsites/>}/>
       <Route path="/metaads" element={<MetaAdsManagement/>}/>
       <Route path="/googleads" element={<GoogleAdsManagement/>}/>
       <Route path="/ai" element={<AIAgentsAutomation/>}/>
       <Route path="/lead" element={<LeadGeneration/>}/>
       <Route path="/service-site" element={<ServiceWebsites/>}/>
       <Route path="/whitelabel" element={<WhiteLabelMarketing/>}/>
       <Route path="/contact" element={<Contact/>}/>


       <Route path="/seo" element={<SEO/>}/>











     


 


    </Routes>
   </Router>
  );
}

export default AppRouter;


