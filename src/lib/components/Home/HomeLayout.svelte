<script lang="ts">
	import { fade } from 'svelte/transition';
	import HomeDetails from './HomeDetails.svelte';
	import { getContext } from 'svelte';
	import type { CarouselContext } from '../Carousel/Carousel.svelte';

	export let backgroundStyle: string;

	const ctx = getContext<CarouselContext>('carousel');

	/**
	 * !FIXME somehow, the gridHeight starts at some value then goes up to the real height.
	 * It causes some unwanted visual effects on the background...
	 */
	let gridHeight: number = 0;
	$: {
		ctx.setHeight(gridHeight);
	}

	const customFadeIn = (node: Element, { delay = 0, duration = 400, z = 1 }) => {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: (t: number) => `opacity: ${t * o}; z-index: ${z};`
		};
	};

	const bgTransitionDur = 500;
</script>

<div
	class="bg"
	style={`background: ${backgroundStyle};`}
	in:customFadeIn={{ duration: bgTransitionDur, z: -9 }}
	out:fade={{ delay: bgTransitionDur, duration: 0 }}
/>

<div class="grid" bind:clientHeight={gridHeight}>
	<span class="indicators-container"><slot name="indicators" /></span>
	<!-- FIXME back navigation fails: absolute + customFadeIn to animate z-index -->
	<span class="title-container" >
		<span in:customFadeIn={{ duration: 500, z: 1 }} out:fade={{ duration: 0 }}>
			<slot name="title" />
		</span>
	</span>
	<span class="details-1-container">
		<HomeDetails>
			<span in:customFadeIn={{ duration: 500, z: 1 }} out:fade={{ duration: 0 }}>
				<slot name="detail-1" />
			</span>
		</HomeDetails>
	</span>
	<span class="details-2-container">
		<HomeDetails>
			<span in:customFadeIn={{ duration: 500, z: 1 }} out:fade={{ duration: 0 }}>
				<slot name="detail-2" />
			</span>
		</HomeDetails>
	</span>
	<span class="image-container">
		<span in:customFadeIn={{ duration: 500, z: 1 }} out:fade={{ duration: 0 }}>
			<slot name="image" />
		</span>
	</span>
	<span class="scroll-btn-container">scroll button desktop</span>
</div>

<style>
	/** DEBUG */
	/** DEBUG END */

	.bg {
		position: absolute; /** relative to some parent outside of this component (Carousel here)*/
		z-index: -10;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 40px); /** FIXME value */
	}

	.grid {
		--w-spacing: 30px; /** FIXME value */
		--h-spacing: 20px; /** FIXME value */

		--details-width: calc(220px); /** FIXME value*/
		--title-height: 70px; /** FIXME value OR remove property */
		--image-width: calc(700px); /** FIXME value*/

		display: grid;
		grid-template:
			'indicators indicators' auto
			'title title' var(--title-height)
			'd1 d2' auto
			'image image' auto / var(--details-width) var(--details-width);
		row-gap: var(--h-spacing);
		column-gap: var(--w-spacing);
		padding: 0 var(--w-spacing);
		justify-items: center;
		align-items: start;

		width: 100%;
		padding-top: 158px; /** FIXME value */
		background: transparent;
		color: white;

		position: absolute; /** relative to some parent outside of this component (Carousel here)*/
		z-index: 0;
		top: 0;
		left: 0;
	}

	.details-1-container {
		grid-area: d1;
	}
	.details-2-container {
		grid-area: d2;
	}
	.image-container {
		grid-area: image;
	}
	.scroll-btn-container {
		grid-area: scroll-btn;
		display: none;
	}
	.indicators-container {
		grid-area: indicators;
	}

	.title-container {
		grid-area: title;
		text-transform: uppercase;
	}

	/** FIXME value @media */
	@media (min-width: 1300px) {
		.bg {
			height: calc(100% - 68px); /** FIXME value */
		}

		.grid {
			grid-template:
				'd1 title d2' var(--title-height)
				'd1 image d2' auto
				'scroll-btn image indicators' 1fr / var(--details-width) var(--image-width) var(--details-width);
		}

		.indicators-container {
			display: inline-flex;
		}
		.scroll-btn-container {
			display: revert;
		}
	}
</style>
