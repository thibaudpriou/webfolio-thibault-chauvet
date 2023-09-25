<script lang="ts">
	import { getContext } from 'svelte';
	import type { CarouselContext } from './Carousel.svelte';

	const ctx = getContext<CarouselContext>('carousel');
	const id = ctx.register();

	const activeItemId = ctx.activeItemId;

	$: active = id === $activeItemId;
</script>

{#if active}
	<slot />
{/if}
