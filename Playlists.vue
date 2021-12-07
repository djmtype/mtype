<template>
<Layout>
	<div>
		<h1 v-html="$page.oneGraph.spotify.me.id" />

		<div
			v-for="(item, index) in $page.oneGraph.spotify.me.playlists"
			:key="index"
		>
			<h2>
				<g-link :to="item.externalUrls.spotify">{{ item.name }}</g-link>
			</h2>

			<!-- <img
				v-if="item.images.length > 1"
				:src="item.images[1].url"
				:width="300"
				:height="300"
			/>
			<img v-else :src="item.images[0].url" :width="300" :height="300" /> -->

			<!-- <img v-if="item.images[1]" :src="item.images[1].url" :width="300" :height="300" />
<img v-else :src="item.images[0].url" :width="300" :height="300" /> -->

			<ol>
				<li v-for="track in item.tracks" :key="track.playlists">
					<g-link :to="track.externalUrls.spotify">
						{{ track.name }} by
						<span v-for="artist in track.artists" :key="artist.tracks">
							{{ artist.name }}
						</span>
					</g-link>
					<br />
					<!-- {{ track.durationMs }} -->
					{{ millisToMinutesAndSeconds(track.durationMs) }}
				</li>
			</ol>
		</div>
	</div>
</Layout>
</template>

<page-query>
{
	oneGraph {
		spotify {
			me {
				id
				playlists(limit: 1) {
					id
					name
					tracks {
						id
						name
						durationMs
						externalUrls {
							spotify
						}
						artists {
							id
							name
						}
					}
					images {
						url
						height
						width
					}
					externalUrls {
						spotify
					}
				}
			}
		}
	}
}

</page-query>



<script>
export default {
	metaInfo: {
		title: 'Playlists',
	},
	methods: {
		millisToMinutesAndSeconds: function (millis) {
			var minutes = Math.floor(millis / 60000)
			var seconds = ((millis % 60000) / 1000).toFixed(0)
			return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
		},
	},
}
</script>

<style>
li {
	margin-bottom: 1.5rem;
}
</style>
