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
  actions: [{ text: 'Subscribe', href: '/#cta2', icon:'tabler:mail' }],
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
        { text: 'Subscribe', href: '/#cta2' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
     { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/forwardkind/', target:'_blank' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Forwardkind', target:'_blank' },
    { ariaLabel: 'Open Collective', icon: 'tabler:circle-dashed', href: 'https://opencollective.com/forwardkind-cooperative', target:'_blank' },    
  ],
  footNote: `
    &#169; 2025-2026 Forwardkind Cooperative
  `,
};
