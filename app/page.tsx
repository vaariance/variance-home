import SiteHero from "@/components/Site/Hero";
import Image from "next/image";

const Home = () => {
  const featureList = [
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
      <section className="site-section">
        <div className="wrapper">
          <header className="site-section__header">
            <div className="wrapper">
              <h2 className="site-section__caption">
                A step forward migrating web3 to mobile
              </h2>
              <p className="site-section__subcaption">
                Open source account abstraction SDK written in dart that
                empowers developers to create mobile-native Web3 applications
                with ease.
              </p>
              <p className="site-section__subcaption">
                Enhancing the overall user experience and opening up new
                possibilities for the Web3 ecosystem on mobile platforms.
              </p>
            </div>
          </header>
          <ul className="feature-list">
            {featureList.map((feature) => (
              <li className="feature-list__item" key={feature.id}>
                <figure className="feature-list__item-img-cont">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    className="feature-list__item-img"
                    width={64}
                    height={64}
                  />
                </figure>
                <div className="feature-list__item-content">
                  <h3 className="feature-list__item-title">{feature.title}</h3>
                  <p className="feature-list__item-description">
                    {feature.description}
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
