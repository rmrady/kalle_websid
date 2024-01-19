let _navbar = document.getElementById('navbar')
let _navbarIcons = document.getElementById('navbarIcons')

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        _navbar.classList.add('fixMenu');
        _navbarIcons.classList.add('navbarIconsShow')
    }else{
        _navbar.classList.remove('fixMenu');
        _navbarIcons.classList.remove('navbarIconsShow')
    }
});