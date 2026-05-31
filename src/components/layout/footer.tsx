import Logo from '@/components/ui/logo';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Guides', href: '/guides' },
      { name: 'Privacy', href: '/privacy-policy' },
      { name: 'Terms', href: '/terms-of-service' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Création OF', href: '/services' },
      { name: 'Accès EDOF / CPF', href: '/services' },
      { name: 'Création RNCP / RS', href: '/services' },
      { name: 'Génération de Leads', href: '/services' },
      { name: 'Marketing & Croissance', href: '/services' },
      { name: 'Accompagnement', href: '/services' },
    ],
  },
  {
    title: 'Formations',
    links: [
      { name: 'E-Qualiopi', href: '/formations' },
      { name: 'Audits Blancs', href: '/formations' },
      { name: 'Offre Garantie', href: '/formations' },
      { name: 'Incubateur', href: '/incubateur' },
      { name: 'Resources', href: '/resources' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-[#f9f9f9] py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Left — logo + tagline + CTA */}
          <div className="flex flex-col gap-5 md:w-56 shrink-0">
            <Logo wrapperClassName="flex" className="w-36 h-9" />
            <p className="text-sm leading-6 text-muted-foreground">
              Lancez votre organisme de formation avec un accompagnement expert, rapide et conforme.
            </p>
            <a
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:bg-foreground/85 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Right — link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-semibold text-foreground">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Courage Formation. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
            <a href="/terms-of-service" className="hover:text-foreground transition-colors">Conditions d&apos;utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
