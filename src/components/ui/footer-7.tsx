import { type ReactNode } from 'react';

interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href?: string;
    onClick?: () => void;
    icon?: ReactNode;
  }>;
}

interface FooterLogo {
  element: ReactNode;
  title?: string;
  onClick?: () => void;
}

interface Footer7Props {
  logo: FooterLogo;
  sections: FooterSection[];
  description: string;
  socialLinks?: Array<{
    icon: ReactNode;
    href: string;
    label: string;
  }>;
  copyright: string;
  legalLinks?: Array<{
    name: string;
    href?: string;
    onClick?: () => void;
  }>;
}

export function Footer7({
  logo,
  sections,
  description,
  socialLinks = [],
  copyright,
  legalLinks = [],
}: Footer7Props) {
  return (
    <section className="py-20 bg-black/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-xs">
            <button
              onClick={logo.onClick}
              className="flex items-center gap-2.5 lg:justify-start"
            >
              {logo.element}
              {logo.title && (
                <h2 className="text-xl font-bold tracking-wide text-white">
                  {logo.title}
                </h2>
              )}
            </button>
            <p className="text-sm leading-relaxed text-gray-500">
              {description}
            </p>
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-5 text-gray-500">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-16">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-5 font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3.5 text-sm text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-left"
                        >
                          {link.icon}
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href ?? '#'}
                          className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                        >
                          {link.icon}
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col justify-between gap-4 text-xs text-gray-500 md:flex-row md:items-center">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    href={link.href ?? '#'}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
