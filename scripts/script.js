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



// Media gallerij buttons
// Stap 1: selecteer media gallerij buttons en de media gallerij carousel
const prevBtn = document.querySelector(".prev1");
const nextBtn = document.querySelector(".next1");
const carousel = document.querySelector(".carousel");

// Stap 2: Wacht tot gebruiker op een button klikt
prevBtn.addEventListener("click", toPrevSlide);
nextBtn.addEventListener("click", toNextSlide);

function toPrevSlide() {
    // Stap 3: Laat linker knop de media gallerij carousel naar links sliden
    const carouselWidth = carousel.offsetWidth;

    carousel.scrollLeft = carousel.scrollLeft - carouselWidth * .8;

    // Stap 3: Laat linker knop de media gallerij carousel naar boven sliden als de media gallerij verticaal is
    const carouselHeight = carousel.offsetHeight;

    carousel.scrollTop = carousel.scrollTop - carouselHeight * .8;    
}

function toNextSlide() {
    // Stap 4: Laat rechter knop de media gallerij carousel naar rechts sliden
    const carouselWidth = carousel.offsetWidth;

    carousel.scrollLeft = carousel.scrollLeft + carouselWidth * .8;

    // Stap 4: Laat rechter knop de media gallerij carousel naar beneden sliden als de media gallerij verticaal is
    const carouselHeight = carousel.offsetHeight;
    
    carousel.scrollTop = carousel.scrollTop + carouselHeight * .8;
}


