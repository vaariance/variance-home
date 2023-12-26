"use client";
import Image from "next/image";
import SiteLogo from "./Site/Logo";
import { useIsVisible } from "@/hooks/useIsVisible";
import { createRef, useRef } from "react";
import { useContext } from "react";
import { PalleteContext } from "@/components/Site/Context";

const BenefitsSection = ({
  benefitList,
}: {
  benefitList: {
    id: string;
    img: string;
    title: string;
    description: string;
  }[];
}) => {
  const { color } = useContext(PalleteContext);

  const listItemRefs = useRef<React.RefObject<HTMLLIElement>[]>(
    benefitList.map(() => createRef()),
  );

  const isVisible1 = useIsVisible(listItemRefs.current[0]);
  const isVisible2 = useIsVisible(listItemRefs.current[1]);
  const isVisible3 = useIsVisible(listItemRefs.current[2]);

  const getVisibilty = (index: number) => {
    switch (index) {
      case 0:
        return isVisible1;
      case 1:
        return isVisible2;
      case 2:
        return isVisible3;
      default:
        return false;
    }
  };

  return (
    <section className="site-section benefits-section">
      <div className="site-section__bg" />
      <div className="wrapper">
        <ul className="benefit-list">
          {benefitList.map((benefit, index) => (
            <li
              className={`benefit-list__item smooth-animation ${
                getVisibilty(index) ? "opacity-100" : "opacity-0"
              }`}
              key={benefit.id}
              ref={listItemRefs.current[index]}
            >
              <figure className="benefit-list__item-img-cont img-cont">
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  className={`${
                    color.text == "text-gray-950" ? "invert" : ""
                  } benefit-list__item-img`}
                  width={64}
                  height={64}
                />
              </figure>
              <div className="benefit-list__item-content">
                <h3 className="benefit-list__item-title">{benefit.title}</h3>
                <p className="benefit-list__item-description">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SiteLogo />
    </section>
  );
};

export default BenefitsSection;
