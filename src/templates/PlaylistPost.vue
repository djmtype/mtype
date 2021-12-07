<template>
	<Layout>
		<article class="entry">

			<div class="entry-header flow-y-sm">
				<h1 class="display entry-title">{{ $page.oneGraph.spotify.playlist.name }}</h1>

			</div>
			<!-- /.entry-header -->

			<div class="entry-content flow-y-xl">
				<div class="entry-inner-content">
			</div>
			</div>
		</article>
	</Layout>
</template>

<script>
// import Header from "~/components/Header";
// import Playlist from "~/components/Playlist";
export default {
	name: 'PlaylistPost',
	components: {
		// Playlist,
		// Header
	},

  metaInfo() {
    return {
      title: this.$page.oneGraph.spotify.playlist.name,
      // etc...
    }
  },
	methods: {
		millisToMinutesAndSeconds: function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
		},
	},
};
</script>


<page-query>
query PlaylistPost ($id: String!) {
  metadata {
    siteName
    siteDescription
  }
   

  oneGraph {
		spotify {
			playlist (id: $id) {
				name
				id
				images {
					url
				}
				externalUrls {
					spotify
				}
				tracks {
					durationMs
					name
					artists {
						name
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


