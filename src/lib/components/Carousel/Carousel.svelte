<script lang="ts" context="module">
	import type { Readable, Writable } from 'svelte/store';
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
	import { derived, writable } from 'svelte/store';

	const activeIdx = writable(0);
	const items = writable([] as string[]);

	let height = 'auto';

	const goPrev = () => {
		activeIdx.update((id) => {
			if (id <= 0) return $items.length - 1;

			return id - 1;
		});
	};
	const goNext = () => {
		activeIdx.update((id) => {
			if (id >= $items.length - 1) return 0;

			return id + 1;
		});
	};

	setContext<CarouselContext>('carousel', {
		register: (key: string) => {
			items.update((arr) => [...arr, key]);
		},
		activeItemIdx: derived(activeIdx, (id) => id), // readonly
		activeItemKey: derived([activeIdx, items], ([id, arr]) => arr[id]), // readonly
		nbItems: derived(items, (arr) => arr.length), // readonly
		setHeight: (h) => {
			height = `${h}px`;
		}
	});
</script>

<button on:click={goPrev}>prev</button>
<button on:click={goNext}>next</button>

<div class="carousel" style:height>
	<slot />
</div>

<style>
	.carousel {
		position: relative;
		z-index: 0; /* stacking context creation */
		overflow: hidden;
	}
</style>
