import Image from "next/image";

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
  return (
    <section className="site-section roadmap-section">
      <div className="wrapper">
        <header className="site-section__header">
          <h2 className="site-section__caption">Roadmap</h2>
        </header>

        <ul className="roadmap-list">
          {roadmapList.map((roadmap) => (
            <li className="roadmap-list__item" key={roadmap.id}>
              <article className="roadmap-item">
                <div className="wrapper">
                  <div className="roadmap-item__media-cont">
                    <figure className="img-cont ">
                      <Image
                        src={`/img/${roadmap.id}.svg`}
                        alt={roadmap.title}
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
    </section>
  );
};

export default RoadmapSection;
