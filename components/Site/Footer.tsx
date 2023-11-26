import SiteLogo from "./Logo";
import SiteNav from "./Nav";

const SiteFooter = () => {
  return (
    <footer className="site-footer site-section">
      <div className="wrapper">
        <SiteNav />
        <div className="items">
          <p>WEB 3</p>
          <SiteLogo />
          <p>MOBILE</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
