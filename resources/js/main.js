// MOBILE NAV

const mobileNav = document.querySelector('.mobile-nav');
const navMenu = document.querySelector('.nav-menu');
const mainElement = document.getElementById('main');

mobileNav.addEventListener('click', () => {
	mobileNav.classList.toggle('active');
	navMenu.classList.toggle('active');
	mainElement.classList.toggle('blur');
});

document.querySelectorAll('.nav-link').forEach((link) =>
	link.addEventListener('click', () => {
		mobileNav.classList.remove('active');
		navMenu.classList.remove('active');
		mainElement.classList.remove('blur');
	})
);

// ABOUT-SECTION

// Show more button in about-text
const bioExtended = document.querySelector('.bio-extended');
const showBtn = document.querySelector('.show-btn');

showBtn.addEventListener('click', () => {
	bioExtended.classList.toggle('hide');
	if (!bioExtended.classList.contains('hide')) {
		showBtn.innerHTML =
			'Show less <img src="./resources/images/arrow-down.svg"></img></a>';
		showBtn.lastChild.style.transform = 'rotate(180deg)';
		bioExtended.style.height = 'auto';
	} else {
		showBtn.innerHTML =
			'Show my life story (basically) <img src="./resources/images/arrow-down.svg"></img></a>';
		showBtn.lastChild.style.transform = 'rotate(0deg)';
		bioExtended.style.height = '0';
	}
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		} else {
			// entry.target.classList.remove('visible');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
