module.exports = {
	siteMetadata: {
		title: `Smit Modi`,
		description: `A simple starter to get up and developing quickly with Gatsby.`,
		author: `smit`,
		menuLinks: [
			{
				name: "Home",
				link: "/"
			},
			{
				name: "Page2",
				link: "/page-2"
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `imsmit - made with Gatsby.js`,
				short_name: `imsmit`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/images/superman.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		"gatsby-plugin-offline"
	]
};
