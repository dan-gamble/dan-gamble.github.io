module.exports = {
  article: require('./test-article.md'),
  head: {
    title: 'Test article',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
    ],
    og: {
      title: 'Test OG title',
      description: 'Test OG description',
      image: 'http://placehold.it/400x400',
    },
    twitter: {
      title: 'Test Twitter title',
      description: 'Test Twitter description',
      image: 'http://placehold.it/300x300',
      imageAlt: 'Test image alt'
    }
  }
}
