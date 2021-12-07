<template>
  <Layout>
    <h1>Playlists</h1>


<!-- <div v-for="(item, index) in $page.oneGraph.spotify.me.playlists" :key="index"> -->
<ol>
  <li v-for="(item, index) in filteredList" :key="index">

			<h2>
				<!-- <g-link :to="item.externalUrls.spotify">{{item.name}}</g-link> -->
          <g-link :to="'/playlists/' + playlistSlug(item.name)">{{item.name}}</g-link>
			</h2>

      {{item.public}}

      <div class="thumb">
        <img
                  v-if="item.images.length > 1"
                  :src="item.images[1].url"
                  :width="300"
                  :height="300"
                  class="playlist-img"
                />
                
      </div><!-- /.thumb -->

</li>
</ol>
  </Layout>
</template>

<page-query>

query MyQuery {
  oneGraph {
    spotify {
      me {
        playlists {
          public
          name
          id
          externalUrls {
            spotify
          }
          images {
            height
            url
            width
          }
          tracks {
            name
            durationMs
            artists {
              name
            }
          }
        }
      }
    }
  }
}


</page-query>

<script>
import slugify from '@sindresorhus/slugify'

export default {
  metaInfo: {
    title: 'Playlists'
  },
  
  computed: {
		filteredList() {
			return this.$page.oneGraph.spotify.me.playlists.filter((item) => {
				return item.public == true;
			});
		},
	},
    methods: {
    playlistSlug(string) {
      return slugify(string)
    }
  }
}
</script>
