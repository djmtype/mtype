<template>
	<li>
		<h2>
			<a :href="bookmark.link">{{ bookmark.title }}</a>
		</h2>

		<p v-html="fullDate(bookmark.isoDate)" />

		<!-- <g-link class="post-card__link" :to="post.path">Link</g-link> -->
	</li>
</template>

<script>
import {
	format,
	parseISO,
//	formatISO
} from "date-fns";

export default {
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
			return format(parseISO(date), "MMM dd, yyyy ");
		},

		replaceBr(content) {
			content = content.replace("<br><br>", "</p><p>");
			return content;
		},

		getImageUrl: function (description) {
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
					"https://unsplash.com/photos/UsSfqYdR64Q/download?force=true&w=640";
			}
			return cleanUrl;
		},
	},
	props: ["bookmark"],
};
</script>

