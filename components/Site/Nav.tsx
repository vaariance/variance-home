import Link from "next/link";

const SiteNav = () => {
  const links = [
    {
      type: "external",
      href: "https://githib.com/",
      text: "GitHub",
    },
    {
      type: "internal",
      href: "/documentation",
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
                {link.text}
              </a>
            ) : (
              <Link className="site-nav__link" href={link.href}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteNav;
