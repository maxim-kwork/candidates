// variables
const headerOverlaySearch = document.querySelector('.header__overlay-search')
const headerOverlayClose = document.querySelector('.header__overlay-close')
const headerOverlayList = document.querySelector('.header__overlay-list')
const headerOverlay = document.querySelector('.header__overlay-wrapper')
const headerArrow = document.querySelector('.header__nav-item--arrow')
const switchThemeImg = document.querySelector('.header__switch-img')
const headerInfoMenu = document.querySelector('.header__info-menu')
const headerDropMenu = document.querySelector('.header__nav-menu')
const headerLink = document.querySelector('.header__overlay-link')
const headerLogo = document.querySelector('.header__info-logo')
const switchTheme = document.querySelector('.header__switch')
const headerBurger = document.querySelector('.header__burger')
const feedbackBg = document.querySelector('.feedback__img')
const headerTop = document.querySelector('.header__top')
const headerBg = document.querySelector('.header__img')
const overlay = document.querySelector('.overlay')
const header = document.querySelector('.header')

// close function
const closeMenuInfo = () => {
	document.addEventListener('click', function (e) {
		const closeMenu = e.composedPath().includes(headerArrow)
		const closeInfo = e.composedPath().includes(headerLogo)
		const closeOverlay = e.composedPath().includes(headerOverlayClose)
		if (!closeMenu) {
			headerDropMenu.classList.remove('header__nav-menu--open')
		}
		if (!closeInfo) {
			headerInfoMenu.classList.remove('header__info-menu--open')
		}
		if (closeOverlay) {
			headerOverlay.classList.remove('header__overlay-wrapper--open')
			overlay.classList.remove('overlay--show')
		}
	})
}

// switch theme function
const switchThemeFunc = () => {
	if (switchThemeImg.src.match('images/icons/sun-icon.svg')) {
		headerBg.src = 'images/decorations/header-light.svg'
		feedbackBg.src = 'images/decorations/feedback-light.svg'
		switchThemeImg.src = 'images/icons/moon-icon.svg'
		document.body.removeAttribute('dark')
		localStorage.setItem('theme', 'light')
	} else {
		headerBg.src = 'images/decorations/header-dark.svg'
		feedbackBg.src = 'images/decorations/feedback-dark.svg'
		switchThemeImg.src = 'images/icons/sun-icon.svg'
		document.body.setAttribute('dark', '')
		localStorage.setItem('theme', 'dark')
	}
}

// events
headerBurger.addEventListener('click', function () {
	headerTop.classList.toggle('header__top--open')
	headerBurger.classList.toggle('header__burger--crossed')
	overlay.classList.toggle('overlay--show')
})
headerArrow.addEventListener('click', function () {
	headerDropMenu.classList.toggle('header__nav-menu--open')
	headerArrow.classList.toggle('header__nav-item--arrow--open')
})
headerLogo.addEventListener('click', function () {
	headerInfoMenu.classList.toggle('header__info-menu--open')
})
headerLink.addEventListener('click', function () {
	headerOverlay.classList.toggle('header__overlay-wrapper--open')
	overlay.classList.toggle('overlay--show')
})
document.addEventListener('DOMContentLoaded', function () {
	localStorage.getItem('theme') === 'dark' && switchThemeFunc()
})
switchTheme.addEventListener('click', switchThemeFunc)
closeMenuInfo()
