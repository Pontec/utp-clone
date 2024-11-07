/*=============MENU NAVBAR==========*/

const menu = (icons, navId) => {
    const icon = document.getElementById(icons),
        nav = document.getElementById(navId)

    icon.addEventListener('click', () => {
        nav.classList.toggle('desplazar-menu')

    })
}

menu('icon', 'navbar-menu')