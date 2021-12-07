<template>
	<footer class="site-footer section-lg" role="contentinfo">
<div class="container max-width-lg txt-right">
	<p class="txt-mono txt-xs">Copyright &copy; {{ currentYear() }} <strong>mtype</strong>. Most rights reserved.</p>
	</div>
	</footer>
</template>

<script>
	export default {
		methods: {
			currentYear() {
		return new Date().getFullYear()
			}
		}
	}
</script>

<style lang="scss" scoped>
.site-footer {
border-top: var(--border-width) solid var(--color-gray-70);
background-color: var(--color-gray-90);
color: var(--color-mute);
}
</style>