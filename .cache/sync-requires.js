const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-page-index-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/templates/ProductPage/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/pages/404.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/pages/page-2.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/Users/paulevans/Documents/coverful2/src/pages/search.js")))
}

