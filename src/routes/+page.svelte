<script lang="ts">
	import CarouselContentLayout from '$lib/components/Carousel/ContentLayout.svelte';

	const backgrounds = [
		'linear-gradient(90deg, #010A44 0%, #001477 50%, #010A44 100%);',
		'linear-gradient(90deg, #3C071B 0%, #9C0E43 50%, #3C071B 100%);',
		'linear-gradient(90deg, #0A1C21 0%, #1B3E4A 50%, #0A1C21 100%);',
		'linear-gradient(90deg, #BE0F39 0%, #FE696C 42.5%, #FE696C 59.69%, #BE0F39 100%);'
	];
	let selectedBgId = 0;

	const changeBackground = () => {
		selectedBgId = (selectedBgId + 1) % backgrounds.length;
	};

	$: selectedBackground = backgrounds[selectedBgId];
</script>

<button on:click={changeBackground}>COLOR BACKGROUND</button>
<CarouselContentLayout backgroundStyle={selectedBackground} />
