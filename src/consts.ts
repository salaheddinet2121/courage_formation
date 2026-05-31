export const SITE_TITLE = 'Courage Formation — Cabinet spécialisé pour organismes de formation';
export const SITE_DESCRIPTION =
  'Courage Formation accompagne les formateurs, entrepreneurs et centres de formation à lancer leur activité, accéder au CPF / EDOF, obtenir Qualiopi et générer leurs premiers clients.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | Courage Formation',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'organisme de formation',
    'Qualiopi',
    'CPF',
    'EDOF',
    'certification RNCP',
    'création OF',
    'audit Qualiopi',
    'accompagnement formation',
    'incubateur formation',
    'financement formation',
    'cabinet formation',
    'lancer organisme formation',
  ],
  authors: [{ name: 'Courage Formation' }],
  creator: 'Courage Formation',
  publisher: 'Courage Formation',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Courage Formation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Courage Formation — Cabinet spécialisé pour organismes de formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@courageformation',
  },
};
