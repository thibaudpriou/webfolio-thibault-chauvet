<script lang="ts">
	import { getContext } from 'svelte';
	import type { CarouselContext } from './Carousel.svelte';

	export let activeItemId: number;

	const ctx = getContext<CarouselContext>('carousel');
	const id = ctx.register();

	$: active = id === activeItemId;
</script>

{#if active}
	<slot />
{/if}
