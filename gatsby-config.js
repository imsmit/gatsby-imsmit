module.exports = {
	siteMetadata: {
		title: `Smit\'s`,
		description: `Smit Modi, A Front-end Developer & Designer from Ahmedabad, India.`,
		author: `smit`,
		twitterUsername : `@smilingsmit`,
		ogImage: `/static/superman-af4627fe0a9dd31beeded7b058566b22.png`,
		siteURL: `https://imsmit.netlify.com`,
		menuLinks: [
			{
				name: "Blogs",
				link: "/blogs"
			},
			{
				name: "Contact",
				link: "/contact"
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
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `UA-137494172-1`,
				// Puts tracking script in the head instead of the body
				head: true,
				// enable ip anonymization
				anonymize: true
			}
		},
		// `gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Smit\'s - Personal blog`,
				short_name: `Smit\'s`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `standalone`,
				icon: `src/images/superman.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `9mo5kzws8c9t`,
				accessToken: `e6e625df6391539b2aaff09ae7a2dcd670bfd1dfb75e5eeeb24291d7f0a9df99`
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [] // just in case those previously mentioned remark plugins sound cool :)
			}
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Poppins:700", "Open+Sans:400,800"]
				}
			}
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: false, // Print removed selectors and processed file names
				develop: false // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// "gatsby-plugin-offline"
	]
};
