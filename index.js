const openMenu = document.querySelector('.m-menu')
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('nav .menu')
const overlay = document.querySelector('.overlay')

const container = document.querySelector('.container')

openMenu.addEventListener ('click', open)
closeMenu.addEventListener ('click', close)

function open(){
    menu.classList.remove('move')
    menu.classList.add('m-active')

    overlay.style.display = 'block'

    

    
}

function close(){
    menu.classList.add('move')
    menu.classList.toggle('m-active')
    overlay.style.display = 'none'
    
}











// function open(){
//     menu.style.transform = "translateX(0%)"

    
// }

// function close(){
//     menu.style.transform = "translateX(100%)"
// }