<template>
  <div>
    <og-card :card="article.head.og"></og-card>
    <twitter-card :card="article.head.twitter"></twitter-card>
    Article {{ $route.params.slug }}

    <article v-html="article.article"></article>
  </div>
</template>

<script>
  import marked from 'marked'

  import OGCard from '../components/OGCard.vue'
  import TwitterCard from '../components/TwitterCard.vue'

  export default {
    name: 'Article',
    components: {
      TwitterCard,
      'og-card': OGCard
    },

    data () {
      return {
        article: {
          head: {}
        },
        baseUrl: ''
      }
    },

    head () {
      return {
        title: this.article.head.title,
        meta: this.article.head.meta,
        link: [
          { rel: 'canonical', content: this.baseUrl }
        ]
      }
    },

    created () {
      this.getArticle()
      this.baseUrl = `${this.$store.state.baseDomain}/${this.$route.params.slug}`
    },

    watch: {
      '$route': 'getArticle'
    },

    methods: {
      getArticle () {
        const slug = this.$route.params.slug

        try {
          this.article = require(`../articles/${slug}/index.js`)
        } catch (e) {
          console.log(e)
          return 'Article not found'
        }
      }
    }
  }
</script>
