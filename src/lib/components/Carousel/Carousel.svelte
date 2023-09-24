<script lang="ts" context="module">
	export type CarouselContext = {
		/**
		 * @returns {int} ID of item
		 */
		register: () => number;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	let activeItemId = 0;
	let nbItems = 0;

	setContext<CarouselContext>('carousel', {
		register: () => {
			const id = nbItems;
			nbItems += 1;
			return id;
		}
	});

	const goPrev = () => {
		activeItemId -= 1;
		if (activeItemId < 0) activeItemId = nbItems - 1;
	};
	const goNext = () => {
		activeItemId += 1;
		if (activeItemId >= nbItems) activeItemId = 0;
	};
</script>

<button on:click={goPrev}>prev</button>
<button on:click={goNext}>next</button>
<slot {activeItemId} {nbItems} />
