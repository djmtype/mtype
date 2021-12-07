<template>
	<Single>
		<article class="entry">
			<div class="entry-content flow-y-xl">
				<div class="entry-inner-content">
					<div class="markdown-body">
						<h1>{{ $page.movie.title }}</h1>
						{{ $page.movie.content }}
						<p v-html="percent($page.movie.vote_average)" />
						{{ $page.movie.genre_ids }}
						<br />
						Released {{ $page.movie.release_date }}
						<br />

						<ul>
							<li v-for="genre in $page.movie.genres" :key="genre.id">
								{{ genre.name }}
							</li>
						</ul>

						<!-- <img
				:src="'https://image.tmdb.org/t/p/w300' + $page.movie.poster_path"
				:alt="$page.movie.title + ' poster'"
				width="300"
				height="450"
				loading="lazy"
			/> -->

						<img
							width="300"
							height="450"
							:src="'https://image.tmdb.org/t/p/w300' + $page.movie.poster_path"
							:alt="$page.movie.title + ' poster'"
							loading="lazy"
							:srcset="
								'https://image.tmdb.org/t/p/w300' +
								$page.movie.poster_path +
								' 300w, https://image.tmdb.org/t/p/w780' +
								$page.movie.poster_path +
								' 780w, https://image.tmdb.org/t/p/w1280' +
								$page.movie.poster_path +
								' 1280w'
							"
							sizes="(max-width: 300px) 100vw, (max-width: 1280px) 50vw, 780px"
						/>

						<!-- <img
				:src="'https://image.tmdb.org/t/p/w300' + $page.movie.poster_path"
				:alt="$page.movie.title + ' poster'"
				width="300"
				height="450"
				loading="lazy"
			/> -->
					</div>
				</div>
			</div>
		</article>
	</Single>
</template>

<page-query>
query Movies($path: String!) {
	movie: movies (path: $path) {
		title
		content
		popularity
		poster_path(width: 300, height: 450, fit: contain, quality: 80)
		genre_ids
		vote_average
		release_date(format: "YYYY")
		id
		genres {
			id
			name
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

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.movie.title,
		};
	},

	methods: {
		percent(string) {
			return Math.round((string / 10) * 100) + "%";
		},
	},
};
</script>