"use client";

import SiteNav from "@/components/Site/Nav";
import Pallete from "@/components/Site/Pallete";
import { useIsVisible } from "@/hooks/useIsVisible";
import Image from "next/image";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

const SiteHero = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref);

  return (
    <section className="site-section site-hero">
      <div className="site-hero__bg" />
      <div
        ref={ref}
        className={`wrapper smooth-animation ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="site-section__header">
          <h1 className="pb-4 text-7xl font-bold">VARIANCE</h1>
          <p className="site-hero__subcaption inline-flex text-sm">
            Your
            <Typewriter
              options={{
                strings: ["mobile", "web3", "flutter"],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "_",
                wrapperClassName: "site-hero__subcaption text-sm inline ml-1",
                cursorClassName: "site-hero__subcaption text-sm mr-1",
                deleteSpeed: 15,
              }}
            />
            Developer toolkit
          </p>
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
        <Pallete />
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
