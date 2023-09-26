<script lang="ts">
	import { getContext } from 'svelte';
	import type { CarouselContext } from './Carousel.svelte';

	export let key: string

	const ctx = getContext<CarouselContext>('carousel');
	ctx.register(key);

	const activeItemId = ctx.activeItemKey;
	
	$: active = key === $activeItemId;
</script>

{#if active}
	<slot />
{/if}
