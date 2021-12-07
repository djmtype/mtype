<template>



<div class="site-brand-logo" aria-hidden="true">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>











</template>

<style lang="scss" scoped>




.site-brand-logo {
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(8, 20px);
	grid-template-rows: repeat(2, 40px);
	max-width: clamp(9rem, 50%, 12rem);
	justify-content: center;
	// padding: 2.5% 5% 2.5% 2.5%;
	
}

.site-brand-logo > * {
	height: 100%;
	width: 100%;
	position: relative;
	// aspect-ratio: 1 / 1;

}

.site-brand-logo {
	> *:first-child {
		background: linear-gradient(-45deg, hsl(var(--hsl-white) / 0.1), hsl(var(--hsl-white)));

		grid-row: 2;
		grid-column: 1 / span 2;
		transform: translate(15%, -15%) var(--rotate-45);
	}

	> *:nth-child(2) {
		background: linear-gradient(270deg, hsl(var(--hsl-white) / 0.8), hsl(var(--hsl-white)) 70%);
		grid-row: 1;
		grid-column: 3 / span 2;
		transform: translate(-14.5%, 14.5%) var(--rotate-45);
	}

	> *:nth-child(3) {
		background: linear-gradient(0deg, hsl(var(--hsl-white) / 0.9), hsl(var(--hsl-white)));
		// background: white;
		grid-row: 2;
		grid-column: 4 / span 2;
		transform: translate(5.5%, -14.5%) var(--rotate-45);
	}

	> *:nth-child(4) {
		background: linear-gradient(0deg, hsl(var(--hsl-white)) 10%, hsl(var(--hsl-white) / 0.7));
		grid-row: 1;
		grid-column: 6 / span 2;
		transform: translate(-24%, 15.0%) var(--rotate-45);
	
	}

	> *:nth-child(5) {
		background: linear-gradient(90deg, hsl(var(--hsl-white) / 0.7), hsl(var(--hsl-white)));
		grid-row: 2;
		grid-column: 7 / span 2;
		transform: translate(-3.5%, -14.5%) var(--rotate-45);
		
	}
}

</style>