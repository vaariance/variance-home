import Link from "next/link";
import { GithubIcon, BookOpenIcon } from "lucide-react";
import { useContext } from "react";
import { PalleteContext } from "@/components/Site/Context";

const SiteNav = () => {
  const { color } = useContext(PalleteContext);

  const links = [
    {
      href: "https://github.com/vaariance",
      text: "GitHub",
    },
    {
      href: "https://docs.variance.space",
      text: "Documentation",
    },
  ];

  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        {links.map((link) => (
          <li className="site-nav__list-item" key={link.href}>
            <Link
              className={`${
                color.text == "text-gray-950"
                  ? "text-gray-600 hover:text-gray-800"
                  : ""
              } site-nav__link`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text === "GitHub" ? (
                <GithubIcon
                  className={`${
                    color.text == "text-gray-950"
                      ? "text-gray-600 hover:text-gray-800"
                      : ""
                  } icon`}
                />
              ) : (
                <BookOpenIcon
                  className={`${
                    color.text == "text-gray-950"
                      ? "text-gray-600 hover:text-gray-800"
                      : ""
                  }icon`}
                />
              )}
              <span className="text">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
