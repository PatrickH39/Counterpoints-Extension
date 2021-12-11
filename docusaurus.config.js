// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Counterpoints',
    tagline: 'Chapter 5 Extension',
    url: 'https://counterpoints.patrickh.ca',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'PatrickH39', // Usually your GitHub org/user name.
    projectName: 'Counterpoints-Extension', // Usually your repo name.
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/patrickh39/Counterpoints-Extension/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Counterpoints',
            logo: {
                alt: 'Globe',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'welcome',
                    position: 'left',
                    label: 'Welcome',
                },
                {
                    type: 'doc',
                    docId: 'human-genome-project/introduction',
                    position: 'left',
                    label: 'Human Genome Project',
                },
                {
                    type: 'doc',
                    docId: 'kosovo-war',
                    position: 'left',
                    label: 'Kosovo War',
                },
                {
                    type: 'doc',
                    docId: 'jihadist-groups',
                    position: 'left',
                    label: 'Jihadist Groups',
                },
                {
                    type: 'doc',
                    docId: 'space-exploration',
                    position: 'left',
                    label: 'Space Exploration',
                },
                {
                    type: 'doc',
                    docId: 'persian-gulf-war/introduction',
                    position: 'left',
                    label: 'Persian Gulf War',
                },
                {
                    href: 'https://github.com/patrickh39/Counterpoints-Extension',
                    className: 'header-github-link',
                    position: 'right',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `<b>Patrick Huynh, Terrance Wen, and Tyler Li</b><br>Socials Studies 10E - S1P1`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;