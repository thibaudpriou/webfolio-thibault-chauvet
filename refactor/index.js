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

/**
 * *--- LOL le scroll
 * yes, it starts at "500 000 000 000" and can go up to infinity
 * just because it's fun
 */

const scrollCounterElement = document.getElementById('lol-scroll-number');
const LOL_COUNTER_START = 500000000000;
// let's save value for next site visit, to outsmart people
const localStorageKey = 'lol:scrollCounter';
let scrollCount = localStorage.getItem(localStorageKey) ?? LOL_COUNTER_START;

if (scrollCounterElement) {
	document.addEventListener('scrollend', () => {
		scrollCount++;
		localStorage.setItem(localStorageKey, scrollCount);
		const scrollCountStr = scrollCount.toString().padStart(11, '0');
		scrollCounterElement.innerHTML =
			scrollCountStr.substring(0, 3) +
			'&nbsp;' +
			scrollCountStr.substring(3, 6) +
			' ' +
			scrollCountStr.substring(6, 9) +
			'&nbsp;' +
			scrollCountStr.substring(9, 12);
	});
}

/**
 * Misc
 */

function scrollToId(sectionId) {
	/* scroll to a section ID */
	const y = document.getElementById(sectionId).offsetTop;
	scrollTo({ top: y, behavior: 'smooth' });
}

function onIndexLoad() {
	const hash = document.location.hash; // #example
	if (!hash) {
		return; // do nothing
	}

	setTimeout(function () {
		// override default beahaviour
		scrollTo({ top: 0 });
	}, 0);

	setTimeout(function () {
		scrollToId(hash.slice(1));
	}, 0);
}

/**
 * About phone: fake clock that actually refreshes for the LOL
 */

const clockElement = document.getElementById('about-links-topbar-clock');
function toTwoDigits(num) {
	const s = '00' + num;
	return s.substring(s.length - 2);
}

function dateHoursMinutes() {
	const now = new Date();
	return toTwoDigits(now.getHours()) + ':' + toTwoDigits(now.getMinutes());
}

if (clockElement) {
	clockElement.innerHTML = dateHoursMinutes();

	setInterval(() => {
		clockElement.innerHTML = dateHoursMinutes();
	}, 5000); // refresh every 10 seconds, fair enough
}
