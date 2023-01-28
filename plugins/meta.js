export default {
  computed: {
    siteName() {
      return this.$store.state.siteInfo.name
    },
    siteDesc() {
      return this.$store.state.siteInfo.description
    },
    favicon() {
      return this.$store.state.siteInfo.site_icon_url
    },
    pageImg() {
      if (this.pageInfo.yoast_head_json.og_image) {
        return this.pageInfo.yoast_head_json.og_image[0].url
      } else {
        return null
      }
    },
    pageImgWidth() {
      if (this.pageImg) {
        return this.pageInfo.yoast_head_json.og_image[0].width
      } else {
        return null
      }
    },
    pageImgHeight() {
      if (this.pageImg) {
        return this.pageInfo.yoast_head_json.og_image[0].height
      } else {
        return null
      }
    },
    // pageDescr() {
    //   if (this.pageInfo.yoast_head_json.og_description) {
    //     return this.pageInfo.yoast_head_json.og_description
    //   } else {
    //     return this.$store.state.siteInfo.description
    //   }
    // }
  },
  head() {
    return {
      title: this.metaTitle || this.pageInfo.yoast_head_json.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            this.pageInfo.yoast_head_json.description || this.siteDesc,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: this.metaType || this.pageInfo.yoast_head_json.og_type,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.pageInfo.yoast_head_json.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            this.pageInfo.yoast_head_json.description || this.siteDesc,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.pageInfo.yoast_head_json.og_url,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.siteName,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.pageImg,
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content: this.pageImgWidth,
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content: this.pageImgHeight,
        },
      ],
      link: [
        // {
        //   rel: 'icon',
        //   type: 'image/x-icon',
        //   href: this.favicon,
        // },
        {
          rel: 'canonical',
          href: this.pageInfo.yoast_head_json.og_url,
        },
      ],
    }
  },
}
