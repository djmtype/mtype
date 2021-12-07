<template>
	<Layout>
		<article class="entry flow-y-xxl">
			<div class="entry-header">
				<h1 class="display entry-title">Bookmarks</h1>
				<p class="h3">
					<span class="sr-only"
						>{{ $page.bookmarks.edges.length }} Bookmarks from
					</span>

					{{
						fullDate($page.bookmarks.edges.slice(-1)[0].node.isoDate)
					}}
					&ndash;
					{{ fullDate($page.bookmarks.edges[0].node.isoDate) }}
				</p>

				<p class="flow-sm">
					<a
						:href="$page.bookmarks.edges[0].node.feedMeta.feedUrl"
						target="_blank"
						rel="noopener"
						>RSS<span class="sr-only"> RSS of latest feeds</span></a
					>
					|
					<a
						href="https://raindrop.io/collection/1229560"
						target="_blank"
						rel="noopener"
						>HTML<span class="sr-only">
							Link to HTML page of collection</span
						></a
					>
				</p>
			</div>

			<div class="grid-raven">
				<ul class="grid-cards">
					<li
						v-for="edge in $page.bookmarks.edges"
						:key="edge.node.id"
						class="card"
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

						<figure
							class="card-thumb embed embed-wide"
							v-if="edge.node.content.length > 0"
						>
							<img :src="getImageUrl(edge.node.content)" class="card-img" />
						</figure>

						<div class="card-body card-content">
							<h2 class="h4 card-title">
								<a
									:href="edge.node.link"
									target="_blank"
									rel="noopener noreferrer"
									>{{ edge.node.title }}</a
								>
							</h2>

							<!-- <div v-html="replaceBr(edge.node.content)" /> -->
							<p v-html="edge.node.contentSnippet" class="card-summary flow-sm" />

						<!-- <div class="card-footer">
							<div class="card-tags flow-md">
							 	<span class="label" v-for="category in edge.node.categories" :key="category.categories">
								#{{ trim(category) }}
		
								</span>
								</div>
						</div>	 -->

							<!-- <p v-if="edge.node.categories" v-html="'#' + edge.node.categories[1]" class="card-tags" /> -->
						</div>
						<!-- /.card-content -->
					</li>
				</ul>
			</div>
			<!-- /.raven-calc -->
		</article>
	</Layout>
</template>

<script>
import {
	addDays,
	format,
	parseISO,
	formatISO,
	isToday,
	startOfToday,
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
			formatISO,
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
query rss {
  bookmarks: allRss (limit: 20, order: ASC) {
    edges {
      node {
        id
        title
        link
        contentSnippet
        isoDate
        content
				categories
        feedMeta {
          feedUrl
          title
        }
      }
    }
  }
}
</page-query>


