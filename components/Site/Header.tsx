import { useContext } from "react";
import { PalleteContext } from "./Context";
import SiteLogo from "./Logo";
import SiteNav from "./Nav";

const SiteHeader = () => {
  const { color } = useContext(PalleteContext);

  return (
    <header className={`${
      color.bg == "bg-gray-950" ? "bg-gray-950/30" : "bg-gray-100/30"
    } site-header`}>
      <div className="wrapper">
        <SiteLogo />
        <SiteNav />
      </div>
    </header>
  );
};

export default SiteHeader;
