import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Subscribe', href: 'https://github.com/arthelokyo/astrowind', icon:'tabler:mail', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        
      ],
    },
    {
      title: '',
      links: [
        
      ],
    },
    {
      title: '',
      links: [
        
      ],
    },
    {
      title: '',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
     { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/forwardkind/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Forwardkind' },
  ],
  footNote: `
    &#169; 2025-2026 Forwardkind Cooperative
  `,
};
