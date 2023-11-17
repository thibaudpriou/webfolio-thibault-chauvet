<script lang="ts">
	import { getContext } from 'svelte';
	import type { CarouselContext } from './Carousel.svelte';
	import { goTo } from './carousel';

	const ctx = getContext<CarouselContext>('carousel');
	const activeItemIdx = ctx.activeItemIdx;
	const nbItems = ctx.nbItems;
</script>

<span class="container">
	{#each new Array($nbItems) as _, i}
		<!-- FIXME ARIA role -->
		<span class="indicator" class:active={$activeItemIdx === i} on:click={() => goTo(i)} />
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
		background: none;

		position: relative;
	}

	.indicator::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0;

		border-radius: 100%;
		background-color: #ffffff;

		transform: translate(-50%, -50%);
		position: absolute;
		top: 50%;
		left: 50%;
	}

	.indicator.active::after {
		opacity: 1;
	}

	.indicator:hover {
		cursor: pointer;
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
