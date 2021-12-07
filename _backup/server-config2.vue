// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// 
const axios = require("axios");

let url_one = `https://api.raindrop.io/rest/v1/raindrop/1229560`;

module.exports = function(api) {
	api.loadSource(async (actions) => {
		const { data } = await axios.get(url_one, {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    });

    
		const contentType = actions.addContentType({
			typeName: "Bookmarks",
			route: "/bookmark/:id",
		});

		for (const item of data.items) {
			let path = `/bookmark/${item.title}`;

			contentType.addNode({
				title: item.name,
				path,
				id: item.id,
			});
		}
	});
};
