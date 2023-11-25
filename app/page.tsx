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
        "We focus on delivering a seamless mobile experience. Oleur project’s core value is to make Dapps accessible and user-friendly on smartphones, aligning with the increasing trend of mobile usage.",
    },
  ];
  const featureList = [
    {
      title: "Safe Protocol",
      description: [
        "safe {core} protocol, the modular account abstraction stack",
        "Leveraging the modular architecture of the Safe protocol with all the benefits",
      ],
    },
    {
      title: "signature schemes",
      description: [
        "Multi-signature schemes (secp256r1, secp256k1)",
        "Allowing the adoption of multiple signature schemes including passkeys for transactions",
      ],
    },
    {
      title: "smart wallet",
      description: [
        "EIP 4337 smart-accounts",
        "Unlocking limitless User Experience with smart-contract wallets for the next 1 billion.",
      ],
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
      <section className="site-section features-section">
        <div className="wrapper">
          <ul className="feature-list">
            {featureList.map((feature) => (
              <li className="feature-list__item" key={feature.title}>
                <div className="feature-list__item-header">
                  <h3 className="feature-list__item-title">{feature.title}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="163"
                    height="163"
                    viewBox="0 0 163 163"
                    fill="none"
                  >
                    <circle
                      cx="81.1025"
                      cy="81.1025"
                      r="80.5"
                      transform="rotate(-0.0734336 81.1025 81.1025)"
                      fill="#5E5E5E"
                      stroke="white"
                      stroke-dasharray="10 10"
                    />
                  </svg>
                </div>
                <div className="feature-list__content">
                  <p>{feature.description[0]}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="192"
                    viewBox="0 0 1 192"
                    fill="none"
                  >
                    <path
                      d="M0.5 0.5V191.5"
                      stroke="white"
                      stroke-dasharray="10 10"
                    />
                  </svg>
                  <p>{feature.description[1]}</p>
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
