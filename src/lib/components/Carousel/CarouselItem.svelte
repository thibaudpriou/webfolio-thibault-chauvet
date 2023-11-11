<script lang="ts">
	import { getContext } from 'svelte';
	import type { CarouselContext } from './Carousel.svelte';

	export let key: string;

	const ctx = getContext<CarouselContext>('carousel');
	ctx.register(key);

	const activeItemId = ctx.activeItemKey;

	$: active = key === $activeItemId;

	let gridHeight: number = 0;
	$: {
		ctx.setHeight(gridHeight);
	}
</script>

{#if active}
	<div class="item" bind:clientHeight={gridHeight}>
		<slot />
	</div>
{/if}

<style>
	.item {
		display: block;
		position: absolute; /** relative to some parent outside of this component (Carousel here)*/
		z-index: 0;
		top: 0;
		left: 0;

		width: 100%;
		height: auto;
		overflow: hidden;
	}
</style>
