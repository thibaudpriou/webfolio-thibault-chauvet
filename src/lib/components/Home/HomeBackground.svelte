<script lang="ts">
	type GradientMember = {
		color: string;
		position: number;
	};

	/** Mapping of each gradient style with their carousel item key */
	export let gradients: Record<
		string,
		[GradientMember, GradientMember, GradientMember, GradientMember]
	>;

	export let activeCarouselItemIdx: number;

	/** transition duration in ms */
	export let transitionDurationMs = 2000;

	$: activeGradients = gradients[activeCarouselItemIdx];
</script>

<div
	class="bg"
	style:--transitionDur={transitionDurationMs + 'ms'}
	style:--color1={activeGradients[0].color}
	style:--position1={activeGradients[0].position + '%'}
	style:--color2={activeGradients[1].color}
	style:--position2={activeGradients[1].position + '%'}
	style:--color3={activeGradients[2].color}
	style:--position3={activeGradients[2].position + '%'}
	style:--color4={activeGradients[3].color}
	style:--position4={activeGradients[3].position + '%'}
/>

<style>
	/** FIXME fallback when houdini is not supported */
	@property --color1 {
		syntax: '<color>';
		initial-value: white;
		inherits: false;
	}

	@property --color2 {
		syntax: '<color>';
		initial-value: white;
		inherits: false;
	}

	@property --color3 {
		syntax: '<color>';
		initial-value: white;
		inherits: false;
	}

	@property --color4 {
		syntax: '<color>';
		initial-value: white;
		inherits: false;
	}

	@property --position1 {
		syntax: '<percentage>';
		initial-value: 0%;
		inherits: false;
	}

	@property --position2 {
		syntax: '<percentage>';
		initial-value: 50%;
		inherits: false;
	}

	@property --position3 {
		syntax: '<percentage>';
		initial-value: 50%;
		inherits: false;
	}

	@property --position4 {
		syntax: '<percentage>';
		initial-value: 100%;
		inherits: false;
	}

	.bg {
		width: 100%;
		height: calc(100% - 40px); /** FIXME value */

		transition-property: --color1, --position1, --color2, --position2, --color3, --position3,
			--color4, --position4;
		transition-duration: var(--transitionDur);
		background: linear-gradient(
			90deg,
			var(--color1) var(--position1),
			var(--color2) var(--position2),
			var(--color3) var(--position3),
			var(--color4) var(--position4)
		);
	}

	/** FIXME value @media */
	@media (min-width: 1300px) {
		.bg {
			height: calc(100% - 68px); /** FIXME value */
		}
	}
</style>
