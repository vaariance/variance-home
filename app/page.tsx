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
        "Enhanced security options for users, by providing a wide range of account options including safe accounts with passkey signers.",
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
      title: "Smart Accounts",
      id: "smart-accounts",
      points: [
        "Enable Safe Smart Accounts for consumer apps",
        "Support for Safe Accounts with passkey signatures",
        "Support for Alchemy light accounts",
      ],
      status: "completed",
    },
    {
      title: "Modular accounts",
      id: "modular-accounts",
      points: [
        "Enable Safe 7579 Accounts for modular apps",
        "Define a Standard module interface to enable developers contribute to the Modules.",
        "Add initial Core rhinestone modules.",
      ],
      status: "in-progress",
    },
    {
      title: "Smart EOA",
      id: "smart-eoa-wallets",
      points: [
        "Built in Compatibility with EIP-4337",
        "Fully implemented EIP-7702 Setup, Validation, Execution and Clean-up",
        "Enable Safe 7702 Accounts",
        "Align with Security best practices",
      ],
      status: "pending",
    },
    {
      title: "Wallet Call API",
      id: "wallet-capabilities",
      points: [
        "Adaptable implementation that enables: wallet_sendCalls, wallet_getCallsStatus, wallet_showCallsStatus and wallet_getCapabilities",
      ],
      status: "pending",
    },
  ];

  const partnerList = [
    {
      name: "Fuse Network",
      id: "fuse-io",
    },
    {
      name: "Voltage Finance",
      id: "voltage-finance",
    },
    {
      name: "LearnWay",
      id: "learn-way",
    },
    {
      name: "Developer DAO",
      id: "developer-dao",
    },
    {
      name: "Guild Audits",
      id: "guild-audits",
    },
    {
      name: "third web",
      id: "third-web",
    },
    {
      name: "pathway",
      id: "path-way",
    },
    {
      name: "Lisk",
      id: "lisk-logo",
    },
    {
      name: "optimism",
      id: "optimism-logo",
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
