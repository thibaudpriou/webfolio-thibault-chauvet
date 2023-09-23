<script lang="ts">
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import CarouselItem from '$lib/components/Carousel/CarouselItem.svelte';
	import CarouselContentLayout from '$lib/components/Carousel/ContentLayout.svelte';
</script>

<Carousel let:activeItemId>
	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			backgroundStyle="linear-gradient(90deg, #010A44 0%, #001477 50%, #010A44 100%);"
		/>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			backgroundStyle="linear-gradient(90deg, #3C071B 0%, #9C0E43 50%, #3C071B 100%);"
		/>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			backgroundStyle="linear-gradient(90deg, #0A1C21 0%, #1B3E4A 50%, #0A1C21 100%);"
		/>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			backgroundStyle="linear-gradient(90deg, #BE0F39 0%, #FE696C 42.5%, #FE696C 59.69%, #BE0F39 100%);"
		/>
	</CarouselItem>
</Carousel>
