import valuesArr from './language-values.js'
const select = document.querySelector('.header__select')
const availableLanguages = ['en', 'ru']

const loadPage = () => {
	location.href = window.location.pathname + '#' + select.value
	location.reload()
}

const changeLanguage = () => {
	let hash = location.hash
	hash = hash.substring(1)
	if (!availableLanguages.includes(hash)) {
		location.href = window.location.pathname + '#ru'
		location.reload()
	}
	select.value = hash

	for (let key in valuesArr) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = valuesArr[key][hash]
		}
	}

	document
		.querySelectorAll('.lng-team__slide_btn')
		.forEach(button => (button.innerHTML = valuesArr['team__slide_btn'][hash]))
	
		document.querySelectorAll('.lng-footer__row_link_1').forEach(link => link.innerHTML = valuesArr['footer__row_link_1'][hash])
		document.querySelectorAll('.lng-footer__row_link_2').forEach(link => link.innerHTML = valuesArr['footer__row_link_2'][hash])
		document.querySelectorAll('.lng-footer__row_link_3').forEach(link => link.innerHTML = valuesArr['footer__row_link_3'][hash])
}
select.addEventListener('change', loadPage)

document.addEventListener('DOMContentLoaded', changeLanguage)
