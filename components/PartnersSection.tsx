import Image from "next/image";

const PartnersSection = ({
  partnerList,
}: {
  partnerList: { name: string }[];
}) => {
  return (
    <section className="site-section partners-section">
      <div className="wrapper">
        <header className="site-section__header">
          <h2 className="site-section__caption">Partners</h2>
        </header>
        <ul className="partners-list">
          {partnerList.map((partner) => (
            <li className="partners-list__item" key={partner.name}>
              <p className="partners-list__item-title">{partner.name}</p>
              <figure className="img-cont">
                <Image
                  src={`/img/partner.svg`}
                  alt={partner.name}
                  width={64}
                  height={64}
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
