// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.dracula;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Epimac Documentation',
    tagline: 'Documentation and tutorials for IONIS students',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.epimac.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'epimac', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    trailingSlash: true,
    deploymentBranch: 'main',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['fr', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl: 'https://github.com/epimac',
                },
                blog: {
                    blogTitle: 'Epimac Blog',
                    blogDescription: 'All the news about Epimac and its projects',
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            // Replace with your project's social card
            image: 'img/embed2.webp',
            navbar: {
                title: 'Epimac',
                logo: {
                    alt: 'Epimac Logo',
                    src: 'img/logo_color.webp',
                    srcDark: 'img/logo_white.webp',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorials',
                    },
                    {
                        to: 'blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    // NOT ACTIVE FOR THE MOMENT
                    // {
                    //     type: 'localeDropdown',
                    //     position: 'right',
                    // },
                    {
                        href: 'https://github.com/epimac/docs',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Tutorials',
                                to: '/docs/intro',
                            }
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://epimac.org/discord',
                            },
                            {
                                label: 'Linkedin',
                                href: 'https://www.linkedin.com/company/epimac-org/',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/epimac',
                            },
                            {
                                label: 'Epimac',
                                href: 'https://epimac.org',
                            },
                            {
                                label: 'My Epimac',
                                href: 'https://my.epimac.org',
                            }
                        ],
                    },
                ],
                copyright: `Copyright © 1999-${new Date().getFullYear()} EpiMac. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp', 'yaml', 'lisp', 'bash', 'json'],
            },
        },
};

module.exports = config;
