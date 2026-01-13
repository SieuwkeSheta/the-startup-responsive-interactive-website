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
// Stap 1: selecteer de grote image en de radiobuttons naast de kleine images
const bigImg = document.querySelector('.big-image')
const smallImgRadioBtns = document.querySelectorAll('[name="img-thumbnail-active"]')

// Stap 2: Wacht tot gebruiker op een radiobutton in een kleine image klikt
smallImgRadioBtns.forEach(
    function(smallImgRadioBtn) {
        smallImgRadioBtn.addEventListener('change', showbigImg)
    }
)

function showbigImg(event) {
    // Stap 4: Laat 'smallImg' de eerst volgende img zijn na de radiobutton (die in hetzelfde label zit)
    const smallImg = this.nextElementSibling

    // Stap 3: Verander de grote image in een kleine image door de 'src' van de grote image aan te passen 
    // + verander bijbehorende alt-attribuut
    bigImg.src = smallImg.src
    bigImg.alt = smallImg.alt
}
}

