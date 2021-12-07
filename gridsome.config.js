// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const path = require("path");

function addStyleResource(rule) {
	rule
		.use("style-resource")
		.loader("style-resources-loader")
		.options({
			patterns: [
				// path.resolve(__dirname, './src/assets/scss/_globals.scss'),
				// // or if you use scss
				// path.resolve(__dirname, './src/assets/scss/_globals.scss'),
				// // you can also use a glob if you'd prefer
				// path.resolve(__dirname, './src/assets/scss/*.scss'),
				// // or scss
				path.resolve(__dirname, "./src/assets/scss/mixins/_colors.scss"),
				path.resolve(__dirname, "./src/assets/scss/common/_variables.scss"),
				path.resolve(__dirname, "./src/assets/scss/mixins/_breakpoints.scss"),
			],
		});
}

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const shiki = require("shiki");

// const monokaiPro = shiki.loadTheme("./static/monokai-pro.json");

module.exports = {
	chainWebpack(config) {
		// Load variables for all vue-files
		const types = ["vue-modules", "vue", "normal-modules", "normal"];

		types.forEach((type) => {
			addStyleResource(config.module.rule("scss").oneOf(type));
		});
	},

	siteName: "mtype",
	siteUrl: "https://mtype.com/",
	siteDescription: "Blog according to me",

	templates: {
		Movies: "/watch/movies/:title",

		// Post: [
		// 		{
		// 			path: (node) => {
		// 				return `/blog/${node.categories[0].slug}/${node.slug}`
		// 			}
		// 		}
		// 	],

		// Post: [
		// 	{
		// 		path: (node) => {
		// 			return `/blog/${node.category}/${node.title}`
		// 		}
		// 	}
		// ]

		Post: "/blog/:category/:title",
		// PlaylistPost: "/playlist/:name"
	},

	// chainWebpack: config => {
	//   config
	//     .plugin('BundleAnalyzerPlugin')
	//     .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
	// },

	cacheBusting: false,

	plugins: [
		{
			use: "@gridsome/source-graphql",
			options: {
				url:
					"https://serve.onegraph.com/graphql?app_id=f1fcae98-6b30-456d-8b8b-6b09db957a48",
				fieldName: "oneGraph",
				typeName: "ONEGRAPH",

				headers: {
					Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
				},
				// remark: {
				//   plugins: [
				// 		'@silvenon/remark-smartypants',
				// 	]
				// },
			},
		},

		{
			use: "@gridsome/source-filesystem",
			options: {
				path: "content/posts/**/*.md",
				// route: '/posts/:title',
				typeName: "Post",
				refs: {
					// Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
					tags: {
						typeName: "Tag",
						create: true,
					},
					category: {
						typeName: "Category",
						create: true,
					},
				},
			},
		},
		{
			use: "gridsome-source-static-meta",
			options: {
				path: "content/site/*.json",
			},
		},
		{
			use: "gridsome-source-rss",
			options: {
				feedUrl: "https://raindrop.io/collection/1229560/feed",
				// feedUrl: "http://fetchrss.com/rss/6001c4424e102066e0799fc26001c32cc7f7d10e147369c2.atom",
				// feedUrl: "https://blog.codepen.io/feed/",
				typeName: "Rss",
				// Parser options, see: https://www.npmjs.com/package/rss-parser
				parser: {},
			},
		},
	],

	transformers: {
		remark: {
			// externalLinks: false,
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
			anchorClassName: "icon icon-link",
			plugins: [
				"@silvenon/remark-smartypants",

				"@noxify/gridsome-remark-table-align",
				[
					"@noxify/gridsome-remark-classes",
					{
						table: "table",
						"tableCell[align=center]": "txt-center",
						"tableCell[align=right]": "txt-right",
					},
				],
				// [
				// 	"gridsome-plugin-remark-shiki",
				// 	{ theme: monokaiPro, skipInline: true },
				// ],

				[
					"@gridsome/remark-prismjs",
					{
						transformInlineCode: true,
						showLineNumbers: false,
					},
				],
			],
			config: {
				footnotes: true,
			},
		},
	},
};
