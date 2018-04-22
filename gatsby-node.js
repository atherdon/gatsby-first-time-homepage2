/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     if (page.path.match(/^\/homepage/)) {
//       // It's assumed that `landingPage.js` exists in the `/layouts/` directory
//       page.layout = "homepage2";

//       // Update the page.
//       createPage(page);
//     }

//     resolve();
//   });
// };

 // exports.createPages = ({ boundActionCreators, graphql }) => {
 //
 // 	const { createPage } = boundActionCreators;
 //
 // 	const blogPostTemplate = path.resolve('src/templates/blog-posts.js');
 //
	// return graphql(`{
	// 	allMarkdownRemark(
	// 		sort: { order: DESC, fields: [frontmatter___date] },
	// 		limit: 1000
	// 	){
	// 		edges {
	// 			node {
	// 				excerpt(pruneLength: 250)
	// 				html
	// 				id
	// 				frontmatter {
	// 					date
	// 					path
	// 					title
	// 				}
	// 			}
	// 		}
	// 	}
	// }`)
	// 	.then(result => {
	// 		if( result.errors ){
	// 			return Promise.reject(result.errors);
	// 		}
 //
 //
	// 		result.data.allMarkdownRemark.edges
	// 			.forEach(({ node }) => {
	// 				const path = node.frontmatter.path;
	// 				createPage({
	// 					path,
	// 					component: blogPostTemplate,
	// 					// layout:    'blog-layout',
	// 					context:   {
	// 						path,
	// 					} //additional data can be passed via context
	// 				});
	// 			});
	// 	});
 //
 // };
