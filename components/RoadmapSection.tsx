"use client";
import Image from "next/image";
import SiteLogo from "./Site/Logo";
import { useIsVisible } from "@/hooks/useIsVisible";
import { createRef, useRef } from "react";
import { useContext } from "react";
import { PalleteContext } from "@/components/Site/Context";

const RoadmapSection = ({
  roadmapList,
}: {
  roadmapList: {
    title: string;
    id: string;
    points: string[];
    status: string;
  }[];
}) => {
  const { color } = useContext(PalleteContext);

  const listItemRefs = useRef<React.RefObject<HTMLLIElement>[]>(
    roadmapList.map(() => createRef()),
  );

  const isVisible1 = useIsVisible(listItemRefs.current[0]);
  const isVisible2 = useIsVisible(listItemRefs.current[1]);
  const isVisible3 = useIsVisible(listItemRefs.current[2]);
  const isVisible4 = useIsVisible(listItemRefs.current[3]);

  const getVisibilty = (index: number) => {
    switch (index) {
      case 0:
        return isVisible1;
      case 1:
        return isVisible2;
      case 2:
        return isVisible3;
      case 3:
        return isVisible4;
      default:
        return false;
    }
  };

  return (
    <section className="site-section roadmap-section">
      <div className="wrapper">
        <header className="site-section__header">
          <h2 className="site-section__caption">Roadmap</h2>
        </header>

        <ul className="roadmap-list">
          {roadmapList.map((roadmap, index) => (
            <li
              className={`roadmap-list__item smooth-animation ${
                getVisibilty(index) ? "opacity-100" : "opacity-0"
              }`}
              key={roadmap.id}
              ref={listItemRefs.current[index]}
            >
              <article className="roadmap-item">
                <div className="wrapper">
                  <div className="roadmap-item__media-cont">
                    <figure className="img-cont ">
                      <Image
                        src={`/img/${roadmap.id}.svg`}
                        alt={roadmap.title}
                        className={`${
                          color.text == "text-gray-950" ? "invert" : ""
                        }`}
                        width={64}
                        height={64}
                      />
                    </figure>
                    <div className="line h-full w-1 border-r border-dashed"></div>
                  </div>
                  <div className="roadmap-item__content">
                    <header className="roadmap-item__header">
                      <h3 className="roadmap-item__title">{roadmap.title}</h3>
                    </header>
                    <ul className="roadmap-item__points">
                      {roadmap.points.map((point, index) => (
                        <li className="roadmap-item__point" key={index}>
                          <span className="roadmap-item__point-text">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <figure className="status img-cont absolute right-0 top-0 h-6 w-6">
                  <Image
                    src={`/img/${roadmap.status}.svg`}
                    alt={roadmap.status}
                    width={24}
                    height={24}
                  />
                </figure>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <SiteLogo />
    </section>
  );
};

export default RoadmapSection;
