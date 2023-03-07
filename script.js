let menuOpen = document.getElementById('menuOpen')
let mobileMenu = document.getElementById('mobileMenu')
let menuClose = document.getElementById('menuClose')
let body = document.querySelector('body')
console.log(menuOpen)

menuOpen.addEventListener("click", () => {
    mobileMenu.classList.add('show-menu'); 
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    body.classList.add('lock-scroll');
})

menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove('show-menu'); 
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
    body.classList.remove('lock-scroll');
})