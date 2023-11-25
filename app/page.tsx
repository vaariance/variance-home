import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SiteHero from "@/components/Site/Hero";
import StepForwardSection from "@/components/StepForwardSection";
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
      <StepForwardSection />
      <BenefitsSection benefitList={benefitList} />
      <FeaturesSection featureList={featureList} />
    </main>
  );
};

export default Home;
