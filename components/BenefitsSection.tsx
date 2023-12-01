import Image from "next/image";

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
  return (
    <section className="site-section benefits-section">
      <div className="site-section__bg" />
      <div className="wrapper">
        <ul className="benefit-list">
          {benefitList.map((benefit) => (
            <li className="benefit-list__item" key={benefit.id}>
              <figure className="benefit-list__item-img-cont img-cont">
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  className="benefit-list__item-img"
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
    </section>
  );
};

export default BenefitsSection;
