import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { PalleteContext } from "@/components/Site/Context";

const SiteLogo = () => {
  const { color } = useContext(PalleteContext);

  return (
    <Link className="site-logo" href="/">
      <figure className="img-cont w-12">
        <Image
          src="/img/logo.svg"
          alt="Logo"
          className={`${color.text == "text-gray-950" ? "invert" : ""}`}
          width={64}
          height={64}
        />
      </figure>
    </Link>
  );
};

export default SiteLogo;
