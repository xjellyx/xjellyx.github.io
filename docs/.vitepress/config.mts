import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JELLY WEBSITE",
  description: "Jelly's work note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux/index' },
       { text: 'Gis', link: '/gis/index' }
    ],

    sidebar: [
      {
        text: 'Gis',
        items: [
          { text: 'Main', link: '/gis/index' },
        ]
      },
      {
        text: 'Linux',
        items: [
          { text: 'Main', link: '/linux/index' },
          { text: 'Install Ovirt', link: '/linux/install_ovirt' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xjellyx' }
    ]
  }
})