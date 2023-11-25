import SiteHero from "@/components/Site/Hero";
import Image from "next/image";

const Home = () => {
  const benefitList = [
    {
      id: "smart-choice",
      img: "/img/smart-choice.svg",
      title: "Smart Choice",
      description:
        "We focus on delivering a seamless mobile experience. Our project’s core value is to make Dapps accessible and user-friendly on smartphones, aligning with the increasing trend of mobile usage.",
    },
    {
      id: "simplicity",
      img: "/img/simplicity.svg",
      title: "Simplicity",
      description:
        "Tools that empower developers to create mobile-native self-custodial wallets and applications with ease.",
    },
    {
      id: "security",
      img: "/img/security.svg",
      title: "Security",
      description:
        "We focus on delivering a seamless mobile experience. Our project’s core value is to make Dapps accessible and user-friendly on smartphones, aligning with the increasing trend of mobile usage.",
    },
  ];
  return (
    <main>
      <SiteHero />
      <section className="site-section step-forward-section">
        <div className="wrapper ">
          {/* <header className="site-section__header">
            <div className="wrapper"> */}
          <h2 className="site-section__caption lg:mb-32 lg:max-w-sm">
            A step forward migrating web3 to mobile
          </h2>
          <div className="text-wrapper gap-12 lg:flex">
            <p className="site-section__subcaption">
              Open source account abstraction SDK written in dart that empowers
              developers to create mobile-native Web3 applications with ease.
            </p>
            <br />
            <p className="site-section__subcaption">
              Enhancing the overall user experience and opening up new
              possibilities for the Web3 ecosystem on mobile platforms.
            </p>
          </div>
        </div>
        {/* </header> */}
        {/* </div> */}
      </section>
      <section className="site-section benefits-section">
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
    </main>
  );
};

export default Home;
