<template>
  <Layout>
    <article class="entry flow-v-2xl">
      <!-- <h1 class="display entry-title text-clip" :style=" 'background-image: url(' + $page.post.cover_image + ')'">{{$page.post.title}}</h1> -->

      <div class="entry-heading">
        <div class="entry-header flow-v-2xs">
          <h1 class="display entry-title">{{ $page.post.title }}</h1>
          <p class="entry-meta txt-uppercase txt-xs txt-primary txt-mono">
            <span class="entry-date">
              <span class="sr-only">Posted on</span>
              {{ $page.post.date }}
            </span>
            <span v-if="$page.post.category.title != 'Playlists'" aria-hidden="true"> / </span>
            <span v-if="$page.post.category.title != 'Playlists'" class="entry-length">
              {{ $page.post.timeToRead }} minute read
            </span>
          </p>
        </div>

        <figure class="entry-thumb">
          <g-image
            v-if="$page.post.cover_image && $page.post.ext_image !== true"
            alt="Cover image"
            class="entry-img"
            :src="$page.post.cover_image"
          />
          <g-image
            v-if="$page.post.cover_image && $page.post.ext_image === true"
            alt="Cover image"
            class="entry-img"
            :src="
              $page.post.cover_image + '&auto=format&fit=crop&w=1400&h=800&q=50'
            "
          />
        </figure>
      </div>

      <div
        v-if="$page.post.hasPlaylist !== true"
        v-html="$page.post.content"
        class="entry-content flow-v-lg"
      />

      <div v-if="$page.post.hasPlaylist === true">
        <Playlist />
      </div>
    </article>
  </Layout>
</template>

<script>
// import Header from "~/components/Header";
import Playlist from "~/components/Playlist";
export default {
  name: "Post",
  components: {
    Playlist,
    // Header
  },

  metaInfo() {
    return {
      title: this.$page.post.title,
      // etc...
    };
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
query Post ($path: String, $id: ID, $playlist: String = "", $hasPlaylist: Boolean = false) {
	metadata {
		siteName
		siteDescription
	}
	 post: post (path: $path, id: $id) {
		 hasPlaylist
		playlist
		id
		title
		content
		date (format: "D MMMM YYYY")
		timeToRead
		cover_image
		ext_image
		category {
			id
			title
		}
	}

	oneGraph {
		spotify @include(if: $hasPlaylist) {
			playlist (id: $playlist) {
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

<style lang="scss" scoped>
.entry-heading {
  display: grid;
  grid-template-rows: 0 auto auto;
  grid-template-columns: auto var(--gutter);
  row-gap: var(--gutter);
  position: relative;

  @include bp-min(lg) {
    grid-template-columns: 70ch auto;
  }
  // &::after {
  // 	position: absolute;
  // 	top: 0;
  // 	left: calc(-1 * var(--gutter));
  // 	z-index: -1;
  // 	content: "";
  // 	mask-image: url("../assets/images/header-bg.svg");
  // 	background: linear-gradient(
  // 			0deg,
  // 			var(--color-gray-80),
  // 			hsla(var(--gray-h), var(--gray-s), var(--gray-80-l), 0)
  // 		),
  // 		linear-gradient(
  // 			to left,
  // 			var(--color-gray-80),
  // 			hsla(var(--gray-h), var(--gray-s), var(--gray-80-l), 0)
  // 		),
  // 		// linear-gradient(45deg, var(--color-purple), var(--color-red))
  // 		var(--color-primary);

  // 	 width: 100%;
  // 	// max-width: calc(#{$bp-xs} + var(--gutter) * 2);
  // 	height: 100%;
  // 	display: block;
  // }
}

.entry-header {
  grid-row: 3;
  grid-column: 1;
  z-index: 2;
  position: relative;
  background-color: var(--color-gray-80);
  padding: var(--gutter) var(--gutter) 0 0;
}

// .entry-content {
// 	max-width: $bp-xs;
// }

.entry-thumb {
  // background: linear-gradient(45deg, var(--color-purple), var(--color-red));

  // background: var(--color-primary);

  position: relative;
  grid-row: 1/-1;
  grid-column: 1/-1;
  aspect-ratio: 1/1.5;
  @include bp-min(sm) {
    height: calc(100vh - var(--gutter) * 2);
    // aspect-ratio: 2/1;

    aspect-ratio: initial;
  }

  // overflow: hidden;
  // box-shadow: 0 0 0 var(--border-width) hsla(var(--gray-h), var(--gray-s), var(--gray-80-l), 1.0);
  // &::before {
  // 	content: "";
  // 	position: absolute;
  // 	top: 0;
  // 	left: 0;
  // 	transform: translate(-10%, -10%);
  // 	width: 5rem;
  // 	height: 5rem;
  // 	display: inline-block;
  // 	background: var(--color-red);
  // 	clip-path: polygon(0% 0%, 0 75%, 25% 75%, 25% 25%, 75% 25%, 75% 0);
  // }
  // 	&::after {
  // 	content: "";
  // 	position: absolute;
  // 	bottom: 0;
  //  right: 0;
  // 	transform: translate(10%, 10%);
  // 	width: 5rem;
  // 	height: 5rem;
  // 	display: inline-block;
  // 	background: var(--color-red);
  // //	background-size: 50% 50%;
  // 	clip-path: polygon(75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 25%, 75% 25%);

  // }
}

.entry-img {
  // filter: grayscale(1) contrast(0.5);
  // mix-blend-mode: multiply;

  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
