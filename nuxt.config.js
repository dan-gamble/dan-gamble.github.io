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
      { name: 'article', path: '/articles/:slug', component: 'pages/articles/article' }
    ]
  }
}
