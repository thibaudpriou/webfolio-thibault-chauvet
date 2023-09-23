<script lang="ts">
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import CarouselItem from '$lib/components/Carousel/CarouselItem.svelte';
	import CarouselContentLayout from '$lib/components/Carousel/ContentLayout.svelte';
</script>

<Carousel let:activeItemId>
	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			title="design graphique"
			backgroundStyle="linear-gradient(90deg, #010A44 0%, #001477 50%, #010A44 100%);"
		>
			<span slot="detail-1">Imaginer et concevoir des créations graphiques</span>
			<span slot="detail-2">Branding & direction artistique Logotype, affiche, brochure...</span
			></CarouselContentLayout
		>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			title="webdesign"
			backgroundStyle="linear-gradient(90deg, #3C071B 0%, #9C0E43 50%, #3C071B 100%);"
		>
			<span slot="detail-1">Design, parcours utilisateur, ergonomie sur mesure</span>
			<span slot="detail-2">Website, application mobile. Charte web, interface plateforme</span>
		</CarouselContentLayout>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			title="graphisme print"
			backgroundStyle="linear-gradient(90deg, #0A1C21 0%, #1B3E4A 50%, #0A1C21 100%);"
		>
			<span slot="detail-1">Créations imprimés, à l'image de votre identité de marque</span>
			<span slot="detail-2">Graphisme, marketing. Magazine, charte graphique...</span>
		</CarouselContentLayout>
	</CarouselItem>

	<CarouselItem {activeItemId}>
		<CarouselContentLayout
			title="identité visuelle"
			backgroundStyle="linear-gradient(90deg, #BE0F39 0%, #FE696C 42.5%, #FE696C 59.69%, #BE0F39 100%);"
		>
			<span slot="detail-1">Être identifiable et mémorisable en un coup d'œil</span>
			<span slot="detail-2">Image de marque. Personnalisation multi-support</span>
		</CarouselContentLayout>
	</CarouselItem>
</Carousel>
