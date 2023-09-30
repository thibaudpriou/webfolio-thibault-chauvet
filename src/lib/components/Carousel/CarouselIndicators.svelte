<script lang="ts">
	import { getContext } from "svelte";
	import type { CarouselContext } from "./Carousel.svelte";

	const ctx = getContext<CarouselContext>('carousel');
	const activeItemIdx = ctx.activeItemIdx;
	const nbItems = ctx.nbItems;

</script>

<span class="container">
	{#each new Array($nbItems) as _, i}
		<span class="indicator" class:active={$activeItemIdx === i} />
	{/each}
</span>

<style>
	.container {
		--size: 9px; /** FIXME value */

		width: 100%;

		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		padding: 15px; /** FIXME value */
	}

	.indicator {
		width: var(--size);
		height: var(--size);
		margin-left: calc(var(--size) + 1px);

		box-sizing: border-box;
		border: 1px solid #ffffff;
		border-radius: var(--size);
	}

	.indicator.active {
		background: #ffffff;
	}

	@media (min-width: 1250px) {
		/** FIXME value */

		.container {
			height: 100%;
			box-sizing: border-box;
			align-items: start;
		}
	}
</style>
