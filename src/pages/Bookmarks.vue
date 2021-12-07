<template>
	<Layout>
		<article class="entry flow-y-xxl">
			<div class="entry-header">
				<h1 class="txt-2xl entry-title">Bookmarks</h1>
				<p class="txt-md">
					<span class="sr-only"
						>{{ $page.bookmarks.edges.length }} Bookmarks from
					</span>

					{{ fullDate($page.bookmarks.edges.slice(-1)[0].node.created) }}
					&ndash;
					{{ fullDate($page.bookmarks.edges[0].node.created) }}
				</p>

				<p class="flow-sm">
					<a
						href="https://bg.raindrop.io/rss/public/1229560"
						target="_blank"
						rel="noopener"
						>RSS<span class="sr-only"> RSS of latest feeds</span>
						</a>
					|
					<a
						href="https://raindrop.io/collection/1229560"
						target="_blank"
						rel="noopener"
						>HTML<span class="sr-only"> Link to HTML page of collection</span>
					</a>
				</p>
			</div>

			<div class="entry-content">
				<div class="entry-inner-content">
					<ul class="grid-auto-md">
						<li
							v-for="edge in $page.bookmarks.edges"
							:key="edge.node.id"
							class="x"
						>
							<!-- <div v-if="edge.node.contentSnippet.length > 1">
							<p>{{ edge.node.contentSnippet }}</p>
						</div> -->
							<!-- {{ getImageUrl(edge.node.content) }} -->
							<!-- <p
									v-html="fullDate(edge.node.isoDate)"
									class="card-meta label label-primary"
								/> -->
							<!-- <img :src="getImageUrl(edge.node.content)" /> -->
							<div class="card">
							<figure v-if="edge.node.cover.length > 0" 
								class="card-thumb">
								<img :src="edge.node.cover" class="card-img" alt="" />
							</figure>
							<div class="card-body card-content">
								<h2 class="txt-sm card-title">
									<a :href="edge.node.link" class="link-block">{{
										edge.node.title
									}}</a>
								</h2>
								<!-- <div v-html="replaceBr(edge.node.content)" /> -->
								<p v-html="edge.node.excerpt" class="card-summary txt-xs flow-sm" />
								<!-- <div class="card-footer" v-if="edge.node.tags">
									<div class="card-tags flow-md">
										 <span class="label label-dark" v-for="tag in edge.node.tags" :key="tag.tags">
					
										<a :href="'https://raindrop.io/collection/1229560?q=tag:' + tag + '&sort=-sort'" target="_blank" rel="noopener noreferrer">#{{ trim(tag) }}</a>
										</span>
										</div>
					
								</div>	 -->
								<!-- <p v-if="edge.node.categories" v-html="'#' + edge.node.categories[1]" class="card-tags" /> -->
							</div>
							</div>
		
						</li>
					</ul>
				</div>

			</div>

		</article>
	</Layout>
</template>

<script>
import {
	// addDays,
	format,
	parseISO,
	// formatISO,
	// isToday,
	// startOfToday,
} from "date-fns";
// import FeedItem from "~/components/FeedItem.vue";

export default {
	// components: {
	// 	FeedItem,
	// },
	metaInfo: {
		title: "Bookmarks or Favorites",
	},
	data() {
		return {
			format,
			// formatISO,
		};
	},
	methods: {
		lastItem(feedItem) {
			return feedItem.slice(-1)[0];
		},

		fullDate(date) {
			return format(parseISO(date), "dd MMMM yyyy ");
		},

		replaceBr(content) {
			content = content.replace("<br><br>", "</p><p>");
			return content;
		},

		trim(content) {
			content = content.trim();
			return content;
		},

		getImageUrl(description) {
			let cleanUrl = "";
			if (description.indexOf(".png") > 0)
				cleanUrl = description.substring(
					description.indexOf("src=") + 5,
					description.indexOf(".png") + 4
				);
			else if (description.indexOf(".jpg") > 0) {
				cleanUrl = description.substring(
					description.indexOf("src=") + 5,
					description.indexOf(".jpg") + 4
				);
			} else if (description.indexOf(".jpeg") > 0) {
				cleanUrl = description.substring(
					description.indexOf("src=") + 5,
					description.indexOf(".jpeg") + 5
				);
			} else if (description.indexOf(".gif") > 0) {
				cleanUrl = description.substring(
					description.indexOf("src=") + 5,
					description.indexOf(".gif") + 4
				);
			} else if (description.indexOf(".bmp") > 0) {
				cleanUrl = description.substring(
					description.indexOf("src=") + 5,
					description.indexOf(".bmp") + 4
				);
			} else {
				cleanUrl =
					"https://images.unsplash.com/photo-1595225476474-87563907a212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80";
			}
			return cleanUrl;
		},
	},
};
</script>

<page-query>

query MyQuery {
  bookmarks: allRaindrop(limit: 12, order: ASC, filter: {tags: {containsNone: "help"}}) {
    edges {
      node {
        title
        cover
        link
        tags
        id
        excerpt
        type
        created
		
      }
    }
  }
}

</page-query>


