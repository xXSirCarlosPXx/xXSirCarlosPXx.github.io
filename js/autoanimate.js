import autoAnimate from './js/autoAnimate.js'
const dropdown = document.getElementById('dropdown')
autoAnimate(dropdown)

const p = document.createElement('p')
p.innerText = "Lorum ipsum..."

function toggle () {
  dropdown.contains(p) ? p.remove() : dropdown.appendChild(p)
}
