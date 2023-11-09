// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VISAI API Documentation",
  tagline: "AI Cloud Platform",
  baseUrl: "/api/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  url: "https://visai-ai.github.io",
  organizationName: "visai-ai", // Usually your GitHub org/user name.
  projectName: "api", // Usually your repo name.
  deploymentBranch: "main",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/visai-ai/visai-inference-api-documentation",
          docLayoutComponent: "@site/src/components/InferenceFeatures",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "API Documentation",
        logo: {
          alt: "VISAI logo",
          src: "img/visai_logo.png",
        },
        items: [
          // { to: "/blog", label: "Blog", position: "left" },
          {
            label: "AI Marketplace",
            position: "left",
            to: "/docs/ai-marketplace",
          },
          {
            label: "Customized AI",
            position: "left",
            to: "/docs/customized-ai",
          },
          {
            href: "https://console.visai.ai/",
            label: "Console",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Doc",
            items: [
              {
                label: "AI Marketplace Doc",
                to: "/docs/ai-marketplace",
              },
              {
                label: "Customized AI Doc",
                to: "/docs/customized-ai",
              },
            ],
          },
          {
            title: "VISAI",
            items: [
              {
                label: "VISAI AI",
                href: "https://visai.ai",
              },
              {
                label: "AI Cloud Platform",
                href: "https://acp.visai.ai",
              },
              {
                label: "ACP Console",
                href: "https://console.visai.ai",
              },
            ],
          },
          {
            title: "Browse Product",
            items: [
              {
                label: "AI Marketplace",
                href: "https://console.visai.ai/ai-marketplace",
              },
              {
                label: "Customized AI",
                href: "https://console.visai.ai/customized-ai",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Cloud Platform. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/petstore.yaml",
            outputDir: "docs/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
