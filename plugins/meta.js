
export default {
  data: () => ({
    title: null,
    descr: null,
    url: null,
    type: null,
    // siteName: this.$store.state.siteInfo.name,
    // favicon: this.$store.state.siteInfo.site_icon_url,
    siteName: null,
    favicon: null,
    img: null,
  }),
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.descr,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: this.type,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.descr,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.siteName,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.img.url,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content: this.img.width,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content: this.img.height,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: this.favicon,
        },
      ],
    }
  },
}
