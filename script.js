let menuIcon = document.quarySelector ('#menu-icon');
let navbar = document.quarySelector ('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x')
	navbar.classList.toggle('active')
}