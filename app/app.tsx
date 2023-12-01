"use client";

import { PalleteContext } from "@/components/Site/Context";
import SiteFooter from "@/components/Site/Footer";
import SiteHeader from "@/components/Site/Header";
import { useContext } from "react";

const App = ({ children }: { children: React.ReactNode }) => {
  const { color } = useContext(PalleteContext);

  return (
    <body className={`${color.bg}`}>
      <SiteHeader />
      {children}
      <SiteFooter />
    </body>
  );
};

export default App;
