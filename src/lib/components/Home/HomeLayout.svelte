<script lang="ts">
	import { fade } from 'svelte/transition';
	import HomeDetails from './HomeDetails.svelte';

	/** transition duration in ms */
	export let transitionDurationMs = 200;

	const customFadeIn = (node: Element, { delay = 0, duration = 400, z = 1 }) => {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: (t: number) => `opacity: ${t * o}; z-index: ${z};`
		};
	};

	const fadeWithSlide = (node: Element, { delay = 0, duration = 400, z = 1, direction = 1 }) => {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: (t: number, u: number) => {
				const trx = direction * u * 100;
				return `opacity: ${t * o}; z-index: ${z}; transform: translateX(${trx}%);`;
			}
		};
	};
</script>

<div class="grid">
	<span class="indicators-container"><slot name="indicators" /></span>
	<!-- FIXME back navigation fails: absolute + customFadeIn to animate z-index -->
	<span class="title-container">
		<span in:customFadeIn={{ duration: transitionDurationMs, z: 1 }} out:fade={{ duration: 0 }}>
			<slot name="title" />
		</span>
	</span>
	<span class="details-1-container">
		<HomeDetails>
			<span
				in:fadeWithSlide={{ duration: transitionDurationMs, delay: transitionDurationMs, z: 1 }}
				out:fadeWithSlide={{ duration: transitionDurationMs, direction: -1 }}
			>
				<slot name="detail-1" />
			</span>
		</HomeDetails>
	</span>
	<span class="details-2-container">
		<HomeDetails>
			<span
				in:fadeWithSlide={{ duration: transitionDurationMs, delay: transitionDurationMs, z: 1 }}
				out:fadeWithSlide={{ duration: transitionDurationMs, direction: -1 }}
			>
				<slot name="detail-2" />
			</span>
		</HomeDetails>
	</span>
	<span class="image-container">
		<span
			in:fadeWithSlide={{ duration: transitionDurationMs, delay: transitionDurationMs, z: 1 }}
			out:fadeWithSlide={{ duration: transitionDurationMs, direction: -1 }}
		>
			<slot name="image" />
		</span>
	</span>
	<span class="scroll-btn-container">scroll button desktop</span>
</div>

<style>
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
