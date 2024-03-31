const NB_CAROUSEL_ITEM = 4;

let activeItemIdx = 0; // init
const carousel = document.getElementById('carousel');

/**
 * Update Carousel with new active item index
 * @param {number} idx
 */
function updateCarousel(idx) {
	if (!carousel) return;

	const currentActiveElements = document.querySelectorAll(`[data-carousel-idx="${activeItemIdx}"]`);
	for (let i = 0; i < currentActiveElements.length; i++) {
		currentActiveElements[i].classList.remove('active');
	}

	const newActiveElements = document.querySelectorAll(`[data-carousel-idx="${idx}"]`);
	for (let i = 0; i < currentActiveElements.length; i++) {
		newActiveElements[i].classList.add('active');
	}

	carousel.setAttribute('data-active', idx);
	activeItemIdx = idx;
}

/**
 * Activate previous carousel items
 */
function goPrev() {
	let newIndex = activeItemIdx - 1;

	if (activeItemIdx <= 0) {
		newIndex = NB_CAROUSEL_ITEM - 1;
	}

	updateCarousel(newIndex);
}

/**
 * Activate next carousel items
 */
function goNext() {
	let newIndex = activeItemIdx + 1;

	if (activeItemIdx >= NB_CAROUSEL_ITEM - 1) {
		newIndex = 0;
	}

	updateCarousel(newIndex);
}

/**
 * Activates given carousel item
 * @param {number} idx
 */
function goTo(idx) {
	let newIndex = idx;

	if (idx >= NB_CAROUSEL_ITEM - 1) {
		newIndex = NB_CAROUSEL_ITEM - 1;
	}
	if (idx < 0) {
		newIndex = 0;
	}

	updateCarousel(newIndex);
}

updateCarousel(activeItemIdx); // init
