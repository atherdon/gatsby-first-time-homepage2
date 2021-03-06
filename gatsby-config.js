module.exports = {
  siteMetadata: {
    title: 'Groceristar',
    subTitle: 'Organize your shopping experience'
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	'gatsby-plugin-catch-links',
  	{
  		resolve: 'gatsby-source-filesystem',
  		options: {
  			path: 'src/pages',
  			name: 'pages'
  		}
  	},
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },


  ],
}
