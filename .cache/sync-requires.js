// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("D:/code/gatsby-first-time-homepage2/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-posts-js": preferDefault(require("D:\\code\\gatsby-first-time-homepage2\\src\\templates\\blog-posts.js")),
  "component---cache-dev-404-page-js": preferDefault(require("D:\\code\\gatsby-first-time-homepage2\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("D:\\code\\gatsby-first-time-homepage2\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\code\\gatsby-first-time-homepage2\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("D:\\code\\gatsby-first-time-homepage2\\src\\pages\\page-2.js"))
}

exports.json = {
  "layout-index.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\layout-index.json"),
  "hello-world.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\hello-world.json"),
  "conte-2.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\conte-2.json"),
  "dev-404-page.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\dev-404-page.json"),
  "404.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\404.json"),
  "index.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\index.json"),
  "page-2.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\page-2.json"),
  "404-html.json": require("D:\\code\\gatsby-first-time-homepage2\\.cache\\json\\404-html.json")
}