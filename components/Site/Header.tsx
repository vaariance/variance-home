import SiteLogo from "./Logo";
import SiteNav from "./Nav";

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="wrapper">
        <SiteLogo />
        <SiteNav />
      </div>
    </header>
  );
};

export default SiteHeader;
