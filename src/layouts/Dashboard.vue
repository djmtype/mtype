<template>
	<div data-layout="dashboard" id="app">
		<!-- <ToggleTheme /> -->
		<div class="wrapper">
			<div class="sidebar">
				<header class="site-header" role="banner">
					<g-link class="site-brand" to="/"
						><Logo /><span class="sr-only">{{
							$static.metadata.siteName
						}}</span></g-link
					>
				</header>

				<Navigation />

				<div class="sponsor">Sponsor</div>
			</div>
			<main class="site-content" id="site-content" role="main">
				<slot />
			</main>
		</div>
		<Footer />
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>





<script>
import Logo from "~/components/Logo.vue";
// import ToggleTheme from '~/components/ToggleTheme.vue'
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Navigation,
		Logo,
		// ToggleTheme,
		Footer,
	},
	metaInfo: {
		title: "Hello, world!",
	},
};
</script>

<style lang="scss" scoped>
main {
	display: grid;
	gap: var(--gutter);
	grid-template-columns: repeat(auto-fit, minmax(var(--base-amount), 1fr));
}

.tile:first-child {
	grid-column: 1/-1;
}




@include bp-min(lg) {
	main {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(5, minmax(var(--base-amount), 1fr));

		
		
	}

	.tile:first-child {
		grid-column: 1/3;
		grid-row: 1/3;
	}

	.tile:nth-child(2) {
		grid-column: 1/3;
		grid-row: 3/4;
	}
	.tile:nth-child(3) {
		grid-column: 3/4;
		grid-row: 2/4;
	}

	.tile:nth-child(4) {
		grid-column: 1/2;
		grid-row: 4/6;
	}

	.tile:nth-child(5) {
		grid-column: 2/4;
		grid-row: 4/5;
	}

	.tile:nth-child(6) {
		grid-column: 2/3;
		grid-row: 5/6;
	}

	.tile:nth-child(7) {
		grid-column: 3/4;
		grid-row: 5/6;
	}
}
</style>