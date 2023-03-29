const openMenu = document.querySelector('.m-menu')
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('nav .menu')

const container = document.querySelector('.container')

openMenu.addEventListener ('click', open)
closeMenu.addEventListener ('click', close)

function open(){
    menu.style.transform = "translateX(0%)"

    
}

function close(){
    menu.style.transform = "translateX(100%)"
}