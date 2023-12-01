import Link from "next/link";
import { GithubIcon, BookOpenIcon } from "lucide-react";
const SiteNav = () => {
  const links = [
    {
      type: "external",
      href: "https://github.com/vaariance",
      text: "GitHub",
    },
    {
      type: "internal",
      href: "https://docs.variance.space",
      text: "Documentation",
    },
  ];

  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        {links.map((link) => (
          <li className="site-nav__list-item" key={link.href}>
            {link.type === "external" ? (
              <a
                className="site-nav__link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text === "GitHub" && <GithubIcon className="icon" />}
                <span className="text">{link.text}</span>
              </a>
            ) : (
              <Link className="site-nav__link" href={link.href}>
                {link.text === "Documentation" && (
                  <BookOpenIcon className="icon" />
                )}
                <span className="text">{link.text}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
