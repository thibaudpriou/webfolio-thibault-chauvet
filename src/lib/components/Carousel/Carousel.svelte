<script lang="ts" context="module">
	export type CarouselContext = {
		/**
		 * @param {string} ID of item
		 */
		register: (key: string) => void;
		activeItemIdx: Readable<number>;
		activeItemKey: Readable<string>;
		nbItems: Readable<number>;
		setHeight: (h: number) => void;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { carousel, goNext, goPrev } from './carousel';
	import type { Readable } from 'svelte/store';

	let height: string | undefined = undefined;

	/**
	 * Each Carousel has its own context
	 */
	setContext<CarouselContext>('carousel', {
		...carousel,
		setHeight: (h) => {
			if (height === undefined && h !== 0) {
				// only at init
				height = `${h}px`;
			}
		}
	});
</script>

<button on:click={goPrev}>prev</button>
<button on:click={goNext}>next</button>

<div class="carousel" style:height={height ?? 'auto'}>
	<slot />
</div>

<style>
	.carousel {
		position: relative;
		z-index: 0; /* stacking context creation */
		overflow: hidden;
	}
</style>
