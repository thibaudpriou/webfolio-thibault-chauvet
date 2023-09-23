<script lang="ts">
	import { fade } from 'svelte/transition';

	export let backgroundStyle: string;
	export let title: string;
</script>

<div class="carousel-content-layout">
	<div class="bg" style={`background: ${backgroundStyle};`} />
	<div class="grid">
		<span>Indicators</span>
		<!-- FIXME back navigation fails: absolute + customFadeIn to animate z-index -->
		<span class="title" transition:fade={{ duration: 500 }}>{title}</span>
		<span class="details" transition:fade={{ duration: 500 }}> <slot name="detail-1" /></span>
		<span class="details" transition:fade={{ duration: 500 }}><slot name="detail-2" /></span>
		<span transition:fade={{ duration: 500 }}>image</span>
		<span>scroll button desktop</span>
	</div>
</div>

<style>
	/** DEBUG */
	.grid span {
		border: solid 1px red;
		box-sizing: border-box;
		color: red;
	}
	/** DEBUG END */

	.carousel-content-layout {
		position: relative;
	}

	.bg {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: calc(100% - 68px); /** FIXME value */
	}

	.grid {
		display: flex;
		flex-flow: row wrap;

		width: 100%;
		height: 500px; /** FIXME value */
		padding-top: 158px; /** FIXME value */
		background: transparent;
	}

	.grid span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-basis: 100%;
	}

	.grid span.details {
		flex-basis: 50%;
	}

	.grid span:nth-child(6) {
		display: none;
	}

	.title {
		text-transform: uppercase;
	}

	@media (min-width: 1250px) {
		/** FIXME value */
		.grid {
			flex-direction: column;
		}

		.grid span {
			flex-grow: 1;
		}

		/** with these values: title text and ellipsis should touch top. I will padding-top the container*/
		.grid span:nth-child(1) {
			order: 6;
			flex-basis: 34%;
		}
		.grid span:nth-child(2) {
			order: 3;
			flex-basis: 24%;
		}
		.grid span:nth-child(3) {
			order: 1;
			flex-basis: 66%;
		}
		.grid span:nth-child(4) {
			order: 5;
			flex-basis: 66%;
		}
		.grid span:nth-child(5) {
			order: 4;
			flex-basis: 76%;
		}
		.grid span:nth-child(6) {
			order: 2;
			flex-basis: 34%;
			display: inline-flex;
		}
	}
</style>
