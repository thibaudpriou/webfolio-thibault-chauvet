/**
 * *--- CAROUSEL
 */
const NB_CAROUSEL_ITEM = 4;
const AUTO_CAROUSEL_MS = 7000;
const AUTO_CAROUSEL_RESTART_DELAY_MS = 3000; // first change will occur after this + AUTO_CAROUSEL_MS

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

let autoCarouselInterval = undefined;

function stopAutoCarousel() {
	if (autoCarouselInterval !== undefined) {
		clearInterval(autoCarouselInterval);
	}
}

function startAutoCarousel() {
	stopAutoCarousel();
	autoCarouselInterval = setInterval(goNext, AUTO_CAROUSEL_MS);
}

/**
 * Activates given carousel item
 * @param {number} idx
 */
function goTo(idx) {
	stopAutoCarousel();

	let newIndex = idx;

	if (idx >= NB_CAROUSEL_ITEM - 1) {
		newIndex = NB_CAROUSEL_ITEM - 1;
	}
	if (idx < 0) {
		newIndex = 0;
	}

	updateCarousel(newIndex);

	setTimeout(startAutoCarousel, AUTO_CAROUSEL_RESTART_DELAY_MS);
}

updateCarousel(activeItemIdx); // init
startAutoCarousel();

/**
 * *--- Grid menu
 */

const menu = document.getElementById('menu-container');
const grid = document.getElementById('grid-container');

function setGridActive(el) {
	const { show } = el.dataset;
	menu.dataset.show = show;
	grid.dataset.show = show;
}
