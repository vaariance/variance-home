import SiteNav from "@/components/Site/Nav";
import Image from "next/image";

const SiteHero = () => {
  return (
    <section className="site-section site-hero">
      <div className="site-hero__bg" />
      <div className="wrapper">
        <header className="site-section__header">
          <h1 className="site-hero__caption">v aa riance</h1>
          <p className="site-hero__subcaption">4337 sdk</p>
        </header>
        <div className="site-hero__elements">
          <span>A c c o u n t</span>
          <span>A b s t r a c t i o n</span>
        </div>
        <div className="site-hero__elements">
          <span>
            V a r i a n c e &nbsp;<span>&nbsp;L a b s</span>
          </span>
          <figure className="img-cont lg:hidden">
            <Image
              src="/img/ellipses.svg"
              alt="Ellipses"
              width={56}
              height={56}
            />
          </figure>
        </div>
        <figure className="img-cont">
          <Image
            src="/img/ellipses.svg"
            alt="Ellipses"
            width={56}
            height={56}
          />
        </figure>
        <SiteNav />
      </div>
    </section>
  );
};
export default SiteHero;
