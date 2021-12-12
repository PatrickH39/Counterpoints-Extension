const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
    title: 'Counterpoints',
    tagline: 'Chapter 5 Extension',
    url: 'https://counterpoints.patrickh.ca',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'PatrickH39',
    projectName: 'Counterpoints-Extension',
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/patrickh39/Counterpoints-Extension/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: '🌙',
                lightIcon: '☀️',
            },
        },
        navbar: {
            title: 'Counterpoints',
            logo: {
                alt: 'Globe',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'Information',
                    position: 'left',
                    label: 'Information',
                },
                {
                    type: 'doc',
                    docId: 'human-genome-project',
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
                    docId: 'persian-gulf-war',
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
    },
};

module.exports = config;