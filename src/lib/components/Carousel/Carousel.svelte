<script lang="ts" context="module">
	import type { Readable, Writable } from 'svelte/store';
	export type CarouselContext = {
		/**
		 * @returns {int} ID of item
		 */
		register: () => number;
		activeItemId: Readable<number>;
		nbItems: Readable<number>;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { derived, writable } from 'svelte/store';

	let activeItemId = writable(0);
	let nbItems = writable(0);

	const goPrev = () => {
		activeItemId.update((id) => {
			if (id <= 0) return $nbItems - 1;

			return id - 1;
		});
	};
	const goNext = () => {
		activeItemId.update((id) => {
			if (id >= $nbItems - 1) return 0;

			return id + 1;
		});
	};

	/**
	 * Derive a writable store to a readonly one
	 * @param s
	 */
	const readonly = <T>(s: Writable<T>): Readable<T> => derived(s, (v) => v);

	setContext<CarouselContext>('carousel', {
		register: () => {
			const id = $nbItems;
			nbItems.update((v) => v + 1);

			return id;
		},
		activeItemId: readonly(activeItemId),
		nbItems: readonly(nbItems)
	});
</script>

<button on:click={goPrev}>prev</button>
<button on:click={goNext}>next</button>

<div class="carousel">
	<slot />
</div>

<style>
	.carousel {
		position: relative;
		z-index: 0; /* stacking context creation */
	}
</style>
