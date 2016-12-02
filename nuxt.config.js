const _ = require('lodash')

module.exports = {
  build: {
    loaders: [
      { test: /\.md$/, loader: "html-loader!markdown-loader" }
    ]
  },
  head: {
    titleTemplate: '%s - dangamble.co.uk'
  },
  router: {
    routes: [
      { name: 'article', path: '/articles/:slug', component: 'pages/_article' }
    ]
  },
  generate: {
    routeParams: {
      '/articles/:slug':  _(require('./articles/config.json'))
        .values()
        .flatten()
        .map('to')
        .compact()
        .map(slug => {
          return {
            'slug': slug.replace(/^\//, '')
          }
        })
        .value()
    }
  }
}
