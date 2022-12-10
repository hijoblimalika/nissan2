const homeModal = document.querySelector(".home__modal")
const aboutModal = document.querySelector(".about__modal")
const navbar = document.querySelector(".navbar")
const contactModal = document.querySelector(".contact__modal")
// const searchModal = document.querySelector(".search__modal")


function showHome(){
    aboutModal.classList.remove("about__show" )


    homeModal.classList.toggle("home__show")  
    // navbar.classList.toggle("navbar__white") 
}
function showAbout(){
    homeModal.classList.remove("home__show")

    aboutModal.classList.toggle("about__show")
}

function showContact(){
    homeModal.classList.remove("home__show")

    contactModal.classList.toggle("contact__show") 
}
