"use client";
import SiteLogo from "./Site/Logo";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const StepForwardSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref);

  return (
    <section className="site-section step-forward-section">
      <div className="site-section__bg" />
      <div
        ref={ref}
        className={`wrapper smooth-animation ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="site-section__caption">A step forward</h2>
        <h2 className="site-section__caption -translate-y-7 lg:mb-32">
          bridging the gap between flutter developers and web3
        </h2>
        <div className="text-wrapper gap-12 lg:flex lg:gap-8">
          <p className="site-section__subcaption">
            Open source account abstraction developer toolkit written in dart
            that empowers developers to create mobile-native Web3 applications
            with ease.
          </p>
          <br />
          <p className="site-section__subcaption">
            Enhancing the overall user experience and opening up new
            possibilities for the Web3 ecosystem on mobile platforms.
          </p>
        </div>
      </div>
      <SiteLogo />
    </section>
  );
};

export default StepForwardSection;
