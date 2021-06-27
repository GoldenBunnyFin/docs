module.exports = {
  title: "Golden Bunny",
  tagline: "Yield Optimizer",
  url: "https://docs.goldenbunny.finance",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "Golden Bunny", // Usually your GitHub org/user name.
  projectName: "Golden Bunny Docs", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: "Golden Bunny",
      logo: {
        alt: "Golden Bunny Logo",
        src: "img/favicon.png",
        href: "/docs/intro",
      },
      items: [
        {
          to: "docs/intro",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/GoldenBunnyFin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Golden Bunny. Inspired by PancakeBunny. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
