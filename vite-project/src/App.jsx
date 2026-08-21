import React from "react";

import Services from "./components/Services/Services";
import DownloadApps from "./components/DownloadApps";
import NewsUpdates from "./components/NewsUpdates";

import { ServicesProvider } from "./context/ServicesContext";

const App = () => {
  return (
    <ServicesProvider>
      
      <Services />
      <DownloadApps />
      <NewsUpdates />

    </ServicesProvider>
  );
};

export default App;