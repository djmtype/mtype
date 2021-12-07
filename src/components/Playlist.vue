<template>
	<div class="flow-v-xl">
		<div class="playlist-header">
			<div class="playlist-summary flow-v-sm">
				<div v-html="$page.post.content" />
			</div>
		</div>

		<div class="playlist grid">
			<div class="playlist-thumb sm:col-12 lg:col-4">
				<div class="playlist-profile">
					<img
						v-if="$page.oneGraph.spotify.playlist.images.length > 1"
						:src="$page.oneGraph.spotify.playlist.images[1].url"
						:width="300"
						:height="300"
						class="playlist-img"
					/>
					<img
						v-else
						:src="$page.oneGraph.spotify.playlist.images[0].url"
						:width="300"
						:height="300"
						class="playlist-img"
					/>
					<a
						class="btn btn-primary"
						:href="$page.oneGraph.spotify.playlist.externalUrls.spotify"
						target="_blank"
						rel="noopener noreferrer"
						>Listen now<span class="sr-only">
							to {{ $page.oneGraph.spotify.playlist.name }}</span
						></a
					>
				</div>
				<!-- /.card -->
			</div>
			<!-- /.playlist-thumb -->

			<div class="playlist-container sm:col-12 lg:col-8 flow-v-lg">
				<h2 class="txt-md txt-uppercase txt-weight-500">Tracklist</h2>
				<ol class="playlist-tracks flow-xs" role="list">
					<li
						v-for="(item, index) in $page.oneGraph.spotify.playlist.tracks"
						class="track-item"
						:key="index"
					>
						<a
							class="track-name"
							:href="item.externalUrls.spotify"
							target="_blank"
							rel="noopener noreferrer"
							><em v-html="fancyText(item.name)"
						/></a>
						<!-- <em class="track-name" v-html="fancyText(item.name)" /> -->

						<!-- <span class="track-name" v-html="item.name" /> -->
						<span class="track-artist txt-xs" :title="item.artists[0].name">{{ item.artists[0].name }}</span>
						<!-- <span v-for="artist in item.artists" :key="artist.tracks">
						{{artist.name}}
					</span> -->
						<!-- <span
							class="track-time txt-mono"
							v-html="millisToMinutesAndSeconds(item.durationMs)"
						/> -->
					</li>
				</ol>
			</div>
			<!-- /.playlist-container -->
		</div>
		<!-- /.playlist -->
	</div>
</template>

<script>
// import remark from 'remark'
import smartypants from "smartypants";

export default {
	methods: {
		fancyText: function (content) {
			var attr = 1; // Number or string

			// str = str.replace(/"(?=\w|$)/g, "&#8220;");
			// str = str.replace(/(?<=\w|^)"/g, "&#8221;");
			var content = smartypants(content, attr);
			return content;
		},

		millisToMinutesAndSeconds: function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
		},
	},
	// props: ['post']
};
</script>

<style lang="scss" scoped>
.playlist li {
	// display: flex;
	align-items: baseline;
	column-gap: var(--space-md);
	padding: var(--space-2xs) 0;
	border-top: var(--border-width) solid var(--color-border);
	display: grid;
	grid-template-columns: 2ch 2fr;
	> *:last-child {
		grid-row: 2;
		grid-column: 2;
	}
	// width: 100%;
}

.playlist ol {
	list-style-type: decimal-leading-zero;
}

.playlist ol > * {
	counter-increment: list-counter;
}

.playlist li::before {
	content: counter(list-counter, decimal-leading-zero) ".";
	color: var(--color-mute);
	font-family: var(--txt-mono);
	font-size: var(--txt-xs);
	
}

@include bp-min(sm) {
	.playlist li {
		grid-template-columns: 2ch 2fr 1fr;
		> *:last-child {
			grid-row: initial;
			grid-column: initial;
		}
	}

}

.playlist-header {
	> * {
		align-self: end;
	}
	> *:first-child {
		align-self: end;
	}
	> img {
		width: 15rem;
		height: auto;
		max-width: 100%;
		margin: auto;
		text-align: center;
	}
}

.playlist-thumb {
	@include bp-min(lg) {
		position: sticky;
		top: var(--gutter);
	}
	align-self: start;
	> img {
		height: auto;
	}
}

@include bp-min(lg) {
	.playlist-container {
		order: -1;
	}
}

.playlist-profile {
	display: flex;
	gap: var(--gutter);
	align-items: center;
	flex-wrap: wrap;

}

.playlist-img {
	object-fit: contain;
	height: auto;
}

.track-artist {
	max-width: 100%;
	white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
