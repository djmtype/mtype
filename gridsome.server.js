// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//

// https://api.raindrop.io/rest/v1/raindrop/1229560

// headers: {
//   Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
// },
// const axios = require('axios')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const _ = require("lodash");

// const pAll = require("p-all");

const axios = require("axios");

// let movie_images = `https://api.themoviedb.org/3/movie/${item.id}/images?api_key=${process.env.MOVIE_API_KEY}`;

// let poster_images = `https://api.themoviedb.org/3/configuration?api_key=${process.env.MOVIE_API_KEY}`;


// let unsplash = `https://api.unsplash.com/photos/${item.id}/?client_id=${process.env.UNSPLASH_CLIENT_ID}`;


let movie_genres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
	process.env.MOVIE_API_KEY
}`;

// let release_info = `https://api.themoviedb.org/3/movie/${item.id}/release_dates?api_key=${
// 	process.env.MOVIE_API_KEY
// }`

module.exports = function(api) {

	// api.loadSource(async (actions) => {

	// 	const { data } = await axios.get(unsplash);

	// 	const collection = actions.addCollection({
	// 		typeName: "Unsplash",
	// 	});

	// 	for (const photo of data) {
	// 		collection.addNode({
	// 			...photo
	// 			// id: photo.id,
	// 			// name: photo.name,
	// 		});
	// 	}
	// }); // end




	api.loadSource(async (actions) => {
		const { data } = await axios.get(movie_genres);

		const collection = actions.addCollection({
			typeName: "Genres",
		});

		for (const genre of data.genres) {
			collection.addNode({
				id: genre.id,
				name: genre.name,
			});
		}
	}); // end


	// api.loadSource(async (actions) => {
	// 	const { data } = await axios.get(release_info);

	// 	const collection = actions.addCollection({
	// 		typeName: "Releases",
	// 	});

	// 	for (const release of data.release_dates) {
	// 		collection.addNode({
	// 			id: release.id,
	// 		});
	// 	}
	// }); 











	api.loadSource(async (actions) => {

    // const instance = axios.create({
    //   // url: '/movies',
    //   baseURL: `https://api.themoviedb.org/3/account/${process.env.ACCOUNT_ID}`,
    //   params: {
    //     api_key: process.env.MOVIE_API_KEY,
    //     session_id: process.env.SESSION_ID,
    //     language: 'en-US'
    //   }
    // })

    // console.log(instance);

const entries = []
let page = 1
let lastRequestRespondedWithTwentyEntries = true

while (lastRequestRespondedWithTwentyEntries) {
  let { data } = await axios.get(`https://api.themoviedb.org/3/account/${process.env.ACCOUNT_ID}/favorite/movies?api_key=${process.env.MOVIE_API_KEY}&session_id=${process.env.SESSION_ID}&language=en-US&page=${page}`)
  entries.push(...data.results)
  page++
  lastRequestRespondedWithTwentyEntries = data.results.length === 20
  //lastRequestRespondedWithTwentyEntries = page.length === 20
  // console.log(entries)
}




    
    // const pages = new Array(3);

    // const responses = await pMap(pages, (_, i) => instance.get('movies', { params: { page: i + 1 } }));

    // const data = responses.flatMap(response => response.data.results)

		const collection = actions.addCollection({
			typeName: "Movies",
		});

    

		for (const item of entries) {
			const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US&append_to_response=release_dates`);
		

			collection.addNode({
			//  ...item,
				release_date: item.release_date,
				vote_average: item.vote_average,
				backdrop_path: item.backdrop_path,
				overview: item.overview,
				id: item.id,
				title: item.title,
				content: item.overview,
				popularity: item.popularity,
				poster_path: item.poster_path,
				genre_ids: item.genre_ids,
				video: item.video,
				rating: item.rating,
				genres: item.genre_ids.map((id) =>
					actions.store.createReference("Genres", id)
				),
				...data
				// posters: data.posters
			});
		}
	}); // end

	// api.loadSource(async( store ) => {
	// 	const postStore = store.addCollection('Post')
	// const categoryStore = store.addCollection('Category')
	
	// const categoryNode = categoryStore.addNode({ 
	// 	title: 'title', 
	// 	id: 'category-demo' 
	// })
	
	// postStore.addNode({
	// 	id: 1,
	// 	title: 'some title',
	// 	category: store.createReference(categoryNode)
	// })
	
	// })

// 	api.loadSource(async( store ) => {
// 		const postStore = store.addCollection('Post')
// const categoryStore = store.addCollection('Categories')

// const categoryNode = categoryStore.addNode({ 
//   title: postStore.title, 
//   slug: postStore.id
// })

// postStore.addNode({
//   id: postStore.id,
//   title: postStore.title,
//   category: store.createReference(categoryNode)
// })
		
// 	})

// api.loadSource(actions => {
//   const posts = actions.addCollection('Post')

//   posts.addReference('category', 'Category')

//   posts.addNode({
//     title: posts.title,
//     category: posts.id
//   })
// })

	


	
	api.loadSource(async (actions) => {
		const { data } = await axios.get(
			"https://api.raindrop.io/rest/v1/raindrops/1229560",
			{
				headers: {
					Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
					// 'Content-Type': 'application/json'
				},
			}
		);
		// .then(console.log).catch(console.log);

		const contentType = actions.addCollection({
			typeName: "Raindrop",
		});

		for (const item of data.items) {
			contentType.addNode({
				...item,
			});
		}
	});

	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`
			{
				allPost {
					edges {
						node {
							id
							title
							path
							playlist
							hasPlaylist
							category {
								id
								title
							}
						}
					}
				}
			}
		`);

		for (const { node } of data.allPost.edges) {

			// var categories = _.map(node.categories, function (category) {
      //   return category.title;
      // });

			// var category = _.map(node.category, function (category) {
      //   return category.id;
      // });
			
			
			
			createPage({
				
				//  path: `/${node.path}`,
				path: `/posts/**/${node.path}`,
				component: "./src/templates/Post.vue",
				context: {
					id: node.id,
					playlist: node.playlist,
					hasPlaylist: node.hasPlaylist,
					// category: category
					// categories: categories,
				},
			});
		}
	});

	api.createPages(async ({ graphql, createPage, slugify }) => {
		const { data } = await graphql(`
			{
				oneGraph {
					spotify {
						me {
							playlists {
								id
								name
							}
						}
					}
				}
			}
		`);

		//for (const { item } of data.oneGraph.spotify.me.playlists) {


		const items = data.oneGraph.spotify.me.playlists;
		items.forEach((item) => {
			createPage({
				path: `/playlists/${slugify(item.name)}`,
				component: "./src/templates/PlaylistPost.vue",
				context: {
					id: item.id,
					name: item.name,
				},
			});
		});
	});
};
