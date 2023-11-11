<script lang="ts">
	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import CarouselIndicators from '$lib/components/Carousel/CarouselIndicators.svelte';
	import CarouselItem from '$lib/components/Carousel/CarouselItem.svelte';
	import HomeBackground from '$lib/components/Home/HomeBackground.svelte';
	import HomeLayout from '$lib/components/Home/HomeLayout.svelte';
</script>

<Carousel let:activeIdx>
	<HomeBackground
		activeCarouselItemIdx={activeIdx}
		gradients={{
			'0': [
				{ color: '#010A44', position: 0 },
				{ color: '#001477', position: 50 },
				{ color: '#001477', position: 50 },
				{ color: '#010A44', position: 100 }
			],

			'1': [
				{ color: '#3C071B', position: 0 },
				{ color: '#9C0E43', position: 50 },
				{ color: '#9C0E43', position: 50 },
				{ color: '#3C071B', position: 100 }
			],

			'2': [
				{ color: '#0A1C21', position: 0 },
				{ color: '#1B3E4A', position: 50 },
				{ color: '#1B3E4A', position: 50 },
				{ color: '#0A1C21', position: 100 }
			],

			'3': [
				{ color: '#BE0F39', position: 0 },
				{ color: '#FE696C', position: 42.5 },
				{ color: '#FE696C', position: 59.69 },
				{ color: '#BE0F39', position: 100 }
			]
		}}
	/>
	<CarouselItem key="0">
		<HomeLayout>
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">design graphique</svelte:fragment>
			<span slot="detail-1">Imaginer et concevoir des créations graphiques</span>
			<span slot="detail-2">Branding & direction artistique Logotype, affiche, brochure...</span>
			<img slot="image" class="image" src="/imgs/design.png" alt="Exemples de design graphiques" />
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="1">
		<HomeLayout>
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">webdesign</svelte:fragment>
			<span slot="detail-1">Design, parcours utilisateur, ergonomie sur mesure</span>
			<span slot="detail-2">Website, application mobile. Charte web, interface plateforme</span>
			<img
				slot="image"
				class="image"
				src="/imgs/devices.png"
				alt="Exemples de webdesign sur différentes plateformes"
			/>
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="2">
		<HomeLayout>
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">graphisme print</svelte:fragment>
			<span slot="detail-1">Créations imprimés, à l'image de votre identité de marque</span>
			<span slot="detail-2">Graphisme, marketing. Magazine, charte graphique...</span>
			<img slot="image" class="image" src="/imgs/print.png" alt="Exemples de graphisme print" />
		</HomeLayout>
	</CarouselItem>

	<CarouselItem key="3">
		<HomeLayout>
			<CarouselIndicators slot="indicators" />

			<svelte:fragment slot="title">identité visuelle</svelte:fragment>
			<span slot="detail-1">Être identifiable et mémorisable en un coup d'œil</span>
			<span slot="detail-2">Image de marque. Personnalisation multi-support</span>
			<img
				slot="image"
				class="image"
				src="/imgs/branding.png"
				alt="Exemples d'identités visuelles"
			/>
		</HomeLayout>
	</CarouselItem>
</Carousel>

<style>
	/* MOVE ME */
	.image {
		width: 100%;
	}
</style>
