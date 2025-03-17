"use client";
import Image from "next/image";
import SiteLogo from "./Site/Logo";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef, useEffect, useState } from "react";

const PartnersSection = ({
  partnerList,
}: {
  partnerList: { name: string; id: string }[];
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const centerPartner = partnerList[0];
  const surroundingPartners = partnerList.slice(1);

  return (
    <section className="site-section partners-section">
      <div className="site-section__bg" />
      <div
        ref={ref}
        className={`wrapper smooth-animation ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="site-section__header">
          <h2 className="site-section__caption">Ecosystem</h2>
        </header>

        <div className="partners-star-layout">
          {/* Center partner */}
          <div className="partners-star-layout__center">
            <p className="partners-list__item-title">{centerPartner.name}</p>
            <figure className="rounded-lg bg-gray-950 p-1.5">
              <Image
                src={`/img/${centerPartner.id}.svg`}
                alt={centerPartner.name}
                width={64}
                height={64}
                className="max-h-16 min-w-16"
              />
            </figure>
          </div>

          {isMobile ? (
            <div className="partners-star-layout__surrounding">
              {chunkArray(surroundingPartners, 4).map((chunk, rowIndex) => (
                <div key={`row-${rowIndex}`} className="partners-row">
                  {chunk.map((partner) => (
                    <div className="partners-list__item" key={partner.name}>
                      <p className="partners-list__item-title">
                        {partner.name}
                      </p>
                      <figure className="rounded-lg bg-gray-950 p-1.5">
                        <Image
                          src={`/img/${partner.id}.svg`}
                          alt={partner.name}
                          width={64}
                          height={64}
                          className="max-h-16 min-w-16"
                        />
                      </figure>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            // Desktop layout - star pattern
            <ul className="partners-star-layout__surrounding">
              {surroundingPartners.map((partner, index) => (
                <li
                  className="partners-list__item"
                  key={partner.name}
                  style={calculatePosition(index, surroundingPartners.length)}
                >
                  <p className="partners-list__item-title">{partner.name}</p>
                  <figure className="rounded-lg bg-gray-950 p-1.5">
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
          )}
        </div>
      </div>
      <SiteLogo />
    </section>
  );
};

const calculatePosition = (index: number, totalPartners: number) => {
  const angleStep = 360 / totalPartners;
  const angle = index * angleStep;

  let radius = 40;
  if (totalPartners > 8) {
    radius = 40 + (totalPartners - 8) * 1.5;
  }
  radius = Math.min(radius, 47);

  const radian = (angle * Math.PI) / 180;

  const top = 50 - Math.cos(radian) * radius;
  const left = 50 + Math.sin(radian) * radius;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: "translate(-50%, -50%)",
  };
};

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default PartnersSection;
