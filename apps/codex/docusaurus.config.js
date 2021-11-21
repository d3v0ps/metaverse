module.exports = {
  title: 'Metaverse Codex',
  tagline: 'Central Factory\'s Metaverse website and documentation',
  url: 'https://central-factory.com',
  baseUrl: '/metaverse/apps/codex/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'central-factory', // Usually your GitHub org/user name.
  projectName: 'metaverse', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'Metaverse Codex',
      logo: {
        alt: 'Metaverse Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'developers/',
          activeBasePath: 'developers',
          label: 'Developers',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sites',
          items: [
            {
              label: 'Portal',
              href: 'http://localhost:4200',
            }
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Integrations',
              to: 'docs/integrations',
            },
            {
              label: 'Brand Guidelines',
              to: 'developers/brand-guidelines',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/central-factory-metaverse',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/KKJ83Tgk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/central-factory/metaverse',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Central Factory`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/central-factory/metaverse/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/central-factory/metaverse/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'docs',
    //     path: 'docs',
    //     routeBasePath: 'docs',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //     // ... other options
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developers',
        path: 'developers',
        routeBasePath: 'developers',
        sidebarPath: require.resolve('./sidebarsDevelopers.js'),
        // ... other options
      },
    ]
  ]
};
