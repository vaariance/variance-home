import Image from "next/image";
import Link from "next/link";

const SiteLogo = () => (
  <Link href="/">
    <figure className="img-cont">
      <Image src="/img/logo.svg" alt="Logo" width={64} height={64} />
    </figure>
  </Link>
);

export default SiteLogo;
