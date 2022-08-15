const nav__flyoutMenu = document.getElementsByClassName('nav__flyoutMenu')[0]
const nav__ul = document.getElementsByClassName('nav__ul')[0]

nav__flyoutMenu.addEventListener('click', () => 
    {
        nav__ul.classList.toggle('nav__ul-active')
        nav__flyoutMenu.classList.toggle('nav__flyoutMenu-active')
    }
)

const button = document.getElementsByClassName("galleryButton")[0]
const gallery = document.getElementsByClassName("gallery")[0]

button.addEventListener("click", ()=>
{
    var clone = gallery.cloneNode(true)
    gallery.after(clone)
    button.classList.toggle("display")
})