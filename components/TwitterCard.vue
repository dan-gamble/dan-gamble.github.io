<template>
  <span v-if="false"></span>
</template>

<script>
  // Test on: https://cards-dev.twitter.com/validator
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      href: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://head-elements.now.sh/about')
    }),
    head () {
      return {
        meta: [
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@_DanGamble' },
          { name: 'twitter:title', content: this.card.title },
          { name: 'twitter:description', content: this.card.description },
          { name: 'twitter:image', content: this.card.image },
          { name: 'twitter:image:alt', content: this.card.imageAlt }
        ]
      }
    }
  }
</script>
