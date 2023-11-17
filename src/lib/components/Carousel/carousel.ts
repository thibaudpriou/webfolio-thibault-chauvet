import { derived, writable } from 'svelte/store';

type CarouselStore = {
	activeIdx: number;
	items: Set<string>;
};

const carouselStore = writable<CarouselStore>({
	activeIdx: 0,
	items: new Set()
});

/**
 * Register a new carousel item key
 * @param key
 */
const registerItem = (key: string) => {
	carouselStore.update((s) => {
		return {
			...s,
			items: s.items.add(key)
		};
	});
};

/**
 * Activate previous carousel item
 */
export const goPrev = () => {
	carouselStore.update((s) => {
		let newIndex = s.activeIdx - 1;

		if (s.activeIdx <= 0) {
			newIndex = s.items.size - 1;
		}

		return {
			...s,
			activeIdx: newIndex
		};
	});
};

/**
 * Activate next carousel item
 */
export const goNext = () => {
	carouselStore.update((s) => {
		let newIndex = s.activeIdx + 1;

		if (s.activeIdx >= s.items.size - 1) {
			newIndex = 0;
		}

		return {
			...s,
			activeIdx: newIndex
		};
	});
};

/**
 * Activate a specific carousel item
 *
 * @param idx
 */
export const goTo = (idx: number) => {
	carouselStore.update((s) => {
		if (idx < 0 || idx >= s.items.size) return;

		return {
			...s,
			activeIdx: idx
		};
	});
};

export const carousel = {
	register: registerItem,
	activeItemIdx: derived(carouselStore, (s) => s.activeIdx),
	activeItemKey: derived(carouselStore, (s) => {
		const elements = [...s.items.keys()];
		return elements[s.activeIdx];
	}),
	nbItems: derived(carouselStore, (s) => s.items.size)
};
