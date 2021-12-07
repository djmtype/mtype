<template>
	<div class="tile" :class="{ 'tile-has-img': post.cover_image }">
		<figure class="tile-thumb">
			<g-image
				v-if="post.cover_image && post.ext_image !== true"
				alt="Cover image"
				class="tile-img"
				:src="post.cover_image"
			/>

			<g-image
				v-if="post.cover_image && post.ext_image === true"
				alt="Cover image"
				class="tile-img"
				:src="post.cover_image + '&auto=format&fit=crop&w=600&h=600&q=60'"
			/>
		</figure>
		<div class="tile-content">
			<h2 class="tile-title">
				<g-link class="tile-link link-block" :to="post.path" v-html="post.title" />
			</h2>
		</div>

		<!-- <span class="label label-sm label-badge label-trans-lite" v-for="cat in post.category" :key="cat.id">
			{{ cat.title }}
		</span> -->

		<span class="label label-sm label-badge label-trans-lite">
			{{ post.category.title }}
		</span>
	</div>
</template>

<script>
export default {
	props: ["post"],
};
</script>


