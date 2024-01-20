let hambMenuIcon1 = document.getElementById('hambMenuIcon1')
let hambMenuIcon2 = document.getElementById('hambMenuIcon2')
let hambMenu = document.getElementsByClassName('hambMenu')[0]

hambMenuIcon1.addEventListener('click', () => {
    hambMenuIcon1.classList.toggle('hambMenuIcon')
    hambMenu.classList.toggle('hambMenuShow')
})

hambMenuIcon2.addEventListener('click', () => {
    hambMenuIcon2.classList.toggle('hambMenuIcon')
    hambMenu.classList.toggle('hambMenuShow')
})

// function resize(){
//     hambMenu.classList.remove('hambMenuShow')
// }