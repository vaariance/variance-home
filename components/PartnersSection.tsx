"use client";
import Image from "next/image";
import SiteLogo from "./Site/Logo";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

const PartnersSection = ({
  partnerList,
}: {
  partnerList: { name: string; id: string }[];
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref);

  return (
    <section className="site-section partners-section">
      <div className="site-section__bg" />
      <div
        ref={ref}
        className={`wrapper smooth-animation ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="site-section__header">
          <h2 className="site-section__caption">Ecosystem</h2>
        </header>
        <ul className="partners-list">
          {partnerList.map((partner) => (
            <li className="partners-list__item" key={partner.name}>
              <p className="partners-list__item-title">{partner.name}</p>
              <figure className="img-cont rounded-lg bg-gray-950 p-1.5">
                <Image
                  src={`/img/${partner.id}.svg`}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="max-h-16 min-w-16"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <SiteLogo />
    </section>
  );
};

export default PartnersSection;
