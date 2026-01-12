// Hamburger menu
// Stap 1: selecteer de hamburgermenulijst en de open en gesloten knoppen
const hamMenu = document.querySelector('.ham-menu')
const hamMenuButtonOpen = document.querySelector('.ham-menu-button-open')
const hamMenuButtonClose = document.querySelector('.ham-menu-button-close')

// Stap 2: Wacht tot op elke knop gedrukt wordt
hamMenuButtonOpen.addEventListener('click', openHamMenu)
hamMenuButtonClose.addEventListener('click', closeHamMenu)

function openHamMenu() {
    // Stap 3: Voeg een class toe als de hamburgermenulijst op gaat
    hamMenu.classList.add('is-open')
}

function closeHamMenu() {
    // Stap 4: Verwijder de class als de hamburgermenulijst sluit
    hamMenu.classList.remove('is-open')
}


// Bewaar product knop
// Stap 1: selecteer het hartje
const saveButton = document.querySelector('.save-product-button')

// Stap 2: Wacht tot gebruiker op hartje klikt
saveButton.addEventListener('click', saveProduct)

function saveProduct() {
    // Stap 3: toggle classname voor het veranderen van kleur van hartje en laat het bonken
    saveButton.classList.toggle('active')
}


// Media gallerij images
// Stap 1: selecteer de grote en kleine images
const bigImg = document.querySelector('.big-image')
const smallImg = document.querySelectorAll('.small-image')


// Stap 2: Wacht tot gebruiker op een kleine image klikt
smallImg.forEach(function(img){
    img.addEventListener('click', showbigImg)
})

function showbigImg() {
    // Stap 3: Verander de grote image in een kleine image door de 'src' van de grote image aan te passen 
    // + verander bijbehorende alt-attribuut
    bigImg.src = this.src
    bigImg.alt = this.alt
}

// Stap 2 en Stap 3 gecombineerd
// smallImg.forEach(function forEachImage(img) {
//     img.addEventListener("click",function showImage(ev) {
//         bigImg.src = this.src
//     } )
// })