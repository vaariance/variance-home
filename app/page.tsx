import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PartnersSection from "@/components/PartnersSection";
import RoadmapSection from "@/components/RoadmapSection";
import SiteHero from "@/components/Site/Hero";
import StepForwardSection from "@/components/StepForwardSection";
import WhySection from "@/components/WhySection";

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
        "Enhanced security options for users, by leveraging hardware-based signatures (passkeys), secure storage (Android keystore or IOS keychain) and biometrics/face-id.",
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

  const roadmapList = [
    {
      title: "Wallet Signers",
      id: "wallet-signers",
      points: [
        "Allowing users to seamlessly switch to hardware-based signatures when needed.",
        "Streamline key management for users relying on EOA (Externally Owned Account) signers.",
        "Interoperate with both passkeys signers and EOA (Externally Owned Account) signers",
      ],
      status: "completed",
    },
    {
      title: "4337 Providers",
      id: "4337-providers",
      points: [
        "Abstract complexities associated with bundlers, Entrypoint, and paymasters.",
        "Make integration of smart accounts straightforward with just a few lines of code.",
        "Empower developers to build user operations in Dart seamlessly.",
      ],
      status: "completed",
    },
    {
      title: "Safe Core Utils",
      id: "safe-core-utils",
      points: [
        "Safe helpers that enable developers to work with Safe modular accounts.",
        "Compatibility with wallet provider.",
        "Gelato as an alternative to 4337 via alt mempool.",
      ],
      status: "in-progress",
    },
    {
      title: "Add-ons",
      id: "add-ons",
      points: [
        "Enable smart wallet developers to provide users with a streamlined means of connecting their wallets to Dapps on the web.",
        "Native Cross-Chain support with CCIP interface.",
      ],
      status: "pending",
    },
  ];

  const partnerList = [
    {
      name: "Partner 1",
    },
    {
      name: "Partner 2",
    },
    {
      name: "Partner 3",
    },
    {
      name: "Partner n",
    },
    {
      name: "Partner n+1",
    },
  ];

  return (
    <main>
      <SiteHero />
      <StepForwardSection />
      <BenefitsSection benefitList={benefitList} />
      <FeaturesSection featureList={featureList} />
      <WhySection />
      <RoadmapSection roadmapList={roadmapList} />
      <PartnersSection partnerList={partnerList} />
    </main>
  );
};

export default Home;
