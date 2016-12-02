<template>
  <span v-if="false"></span>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    head () {
      return {
        meta: [
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: `http://dangamble.co.uk/${this.$route.fullPath}` },
          { name: 'og:title', content: this.card.title },
          { name: 'og:description', content: this.card.description },
          { name: 'og:image', content: this.card.image }
        ]
      }
    }
  }
</script>
