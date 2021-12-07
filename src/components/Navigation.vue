<template>
	<nav class="site-nav">
		<ul class="nav-list" role="list">
			<li
				v-for="navItem in $static.metadata.headerNavigation"
				:key="navItem.name"
				class="nav-item"
			>
				<g-link
					:to="navItem.link"
					:title="navItem.name"
					v-if="navItem.external != true"
          class="nav-link"
					>{{ navItem.name }}</g-link
				>
				<a
					:href="navItem.link"
					target="_blank"
          rel="noopener noreferrer"
					:title="navItem.name"
					v-if="navItem.external == true"
          class="nav-link-external"
					>{{ navItem.name }}</a
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	// data: function () {
	// 	return {
	// 		vcoConfig: {
	// 			events: ["dblclick", "click"],
	// 			isActive: true,
	// 		},
	// 	};
	// },
	components: {},
	props: {},
	methods: {},
	watch: {},
};
</script>

<static-query>
query {
  metadata {
    siteName
    headerNavigation {
      name
      link
      external
     
    }
  }
}
</static-query>

<style lang="scss" scoped>

</style>