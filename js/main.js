const footerYear = document.querySelector('.footer__year');
const navBtn = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burget-nav__box');
const allNavItems = document.querySelectorAll('.burget-nav__box--link');


const handleNav = () => {
	burgerNav.classList.toggle('active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			burgerNav.classList.remove('active');
		});
	});

    handleNavItemsAnimation();
    deleteAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};
const deleteAnimation = () => {
	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			allNavItems.forEach((el) => {
				el.classList.remove('nav-items-animation');
			});
		});
	});
};
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);