<script lang="ts">
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import CarouselIndicators from '$lib/components/Carousel/CarouselIndicators.svelte';
	import CarouselItem from '$lib/components/Carousel/CarouselItem.svelte';
	import HomeLayout from '$lib/components/Home/HomeLayout.svelte';
</script>

<Carousel>
	<CarouselItem key="0">
		<HomeLayout backgroundStyle="linear-gradient(90deg, #010A44 0%, #001477 50%, #010A44 100%);">
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">design graphique</svelte:fragment>
			<span slot="detail-1">Imaginer et concevoir des créations graphiques</span>
			<span slot="detail-2">Branding & direction artistique Logotype, affiche, brochure...</span>
			<img slot="image" class="image" src="/imgs/design.png" alt="Exemples de design graphiques" />
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="1">
		<HomeLayout backgroundStyle="linear-gradient(90deg, #3C071B 0%, #9C0E43 50%, #3C071B 100%);">
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">webdesign</svelte:fragment>
			<span slot="detail-1">Design, parcours utilisateur, ergonomie sur mesure</span>
			<span slot="detail-2">Website, application mobile. Charte web, interface plateforme</span>
			<img slot="image" class="image" src="/imgs/devices.png" alt="Exemples de webdesign sur différentes plateformes" />
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="2">
		<HomeLayout backgroundStyle="linear-gradient(90deg, #0A1C21 0%, #1B3E4A 50%, #0A1C21 100%);">
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">graphisme print</svelte:fragment>
			<span slot="detail-1">Créations imprimés, à l'image de votre identité de marque</span>
			<span slot="detail-2">Graphisme, marketing. Magazine, charte graphique...</span>
			<img slot="image" class="image" src="/imgs/print.png" alt="Exemples de graphisme print" />
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="3">
		<HomeLayout
			backgroundStyle="linear-gradient(90deg, #BE0F39 0%, #FE696C 42.5%, #FE696C 59.69%, #BE0F39 100%);"
		>
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">identité visuelle</svelte:fragment>
			<span slot="detail-1">Être identifiable et mémorisable en un coup d'œil</span>
			<span slot="detail-2">Image de marque. Personnalisation multi-support</span>
			<img slot="image" class="image" src="/imgs/branding.png" alt="Exemples d'identités visuelles" />
		</HomeLayout>
	</CarouselItem>
</Carousel>

<style>
	/* MOVE ME */
	.image {
		width: 100%;
	}
</style>
