import SiteNav from "@/components/Site/Nav";
import Image from "next/image";

const SiteHero = () => {
  return (
    <section className="site-section site-hero">
      <div className="wrapper">
        <header className="site-section__header">
          <h1 className="site-hero__caption">v aa riance</h1>
          <p className="site-hero__subcaption">4337 sdk</p>
        </header>
        <div className="site-hero__elements">
          <span>Account</span>
          <span>Abstraction</span>
        </div>
        <div className="site-hero__elements">
          <span>Variance Labs</span>
          <figure className="img-cont">
            <Image
              src="/img/ellipses.svg"
              alt="Ellipses"
              width={56}
              height={56}
            />
          </figure>
        </div>
        <SiteNav />
      </div>
    </section>
  );
};
export default SiteHero;
