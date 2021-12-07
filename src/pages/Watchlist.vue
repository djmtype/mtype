<template>
	<Layout>
		<article class="entry flow-y-xxl">
			<div class="entry-header">
				<h1 class="txt-3xl entry-title">Watchlist</h1>
			</div>

			<div class="entry-list">
			<!-- 	<input
					type="text"
					name="search"
					id="search"
					placeholder="Type something..."
					v-model="search"
				/> -->
				<article
					v-for="movie in searchResults"
					:key="movie.node.id"
					class="flow-v-sm flow-2xl"
				>
					<h2>{{ movie.node.title }}</h2>
					<p v-if="movie.node.title != movie.node.original_title">
						<em v-html="movie.node.original_title" />
					</p>
					<p>{{ movie.node.overview }}</p>
<g-link :to="movie.node.path">Visit page</g-link>
					<!-- <img :src="'https://image.tmdb.org/t/p/w300' + movie.node.poster_path" width="300" height="450" loading="lazy" /> -->

					<!-- <pre
						v-html="movie.node.release_dates.results" /> -->


					<!-- <pre>
release_dates {
  results {
    iso_3166_1
    release_dates {
      certification
    }
  }
}
</pre> -->

					<div
						v-for="result in movie.node.release_dates.results"
						:key="result.release_dates.results"
					>
						<div v-if="result.iso_3166_1 == 'US'">
							<!-- <ul>
			<li v-for="releaseDate in result.release_dates" :key="releaseDate.results">

				{{ releaseDate.certification }}
			</li>
		</ul> -->

							<p v-if="result.release_dates[0] && result.release_dates[0].certification.length > 0">
								Rated {{ result.release_dates[0].certification }}
							</p>
							
							<p v-else-if="result.release_dates[1] && result.release_dates[1].certification.length > 0">
								Rated {{ result.release_dates[1].certification }}
							</p>

							<p v-else-if="result.release_dates[2] && result.release_dates[2].certification.length > 0">
								Rated {{ result.release_dates[2].certification }}
							</p>

							<p v-else-if="result.release_dates[3] && result.release_dates[3].certification.length > 0">
								Rated {{ result.release_dates[3].certification }}
							</p>

							<p v-else>Missing <abbr title="Motion Picture Association">MPA</abbr> rating</p>
						</div>
					</div>
				</article>
			</div>

			<div class="entry-content">
				<div class="entry-inner-content">
					<h2>Movies</h2>
					<ol>
						<li v-for="edge in $page.movies.edges" :key="edge.node.id">
							<g-link :to="edge.node.path">{{ edge.node.title }}</g-link>

							<div v-html="edge.node.content"></div>
							<div v-html="'Popularity: ' + edge.node.popularity"></div>
							<div v-html="'Vote: ' + edge.node.vote_average"></div>
							<div v-html="'Genres: ' + edge.node.genre_ids"></div>

							<div v-html="'Released: ' + edge.node.release_date"></div>

							<!-- <ul>
            <li v-for="genre in edge.node.genre_ids" :key="genre.node.id">
             
              </li>
          </ul> -->
						</li>
					</ol>
				</div>
			</div>
		</article>
	</Layout>
</template>

<script>
export default {
	// components: {
	// 	FeedItem,
	// },
	metaInfo: {
		title: "Watchlist",
	},
	data() {
		return {
			search: "",
		};
	},

	computed: {
		searchResults() {
			return this.$page.movies.edges.filter((movie) => {
				return movie.node.title
					.toLowerCase()
					.includes(this.search.toLowerCase().trim());
			});
		},
	},

	methods: {},
};
</script>

<style scoped>
.entry-list {
	grid-column: 3 / 4;
}
</style>

<page-query>

 query {
  movies: allMovies (limit: 10, sort: {by: "release_date", order: DESC}) {
    edges {
      node {
        title
				original_title
				poster_path
				path
        vote_average
        id
        path
        overview
        popularity
        genre_ids
        release_date(format: "YYYY")
				release_dates {
          results {
            iso_3166_1
            release_dates {
              certification
            }
          }
        }

      }
    }
  }

   genres: allGenres {
    edges {
      node {
        id
        name
      }
    }
  }



  }

</page-query>


