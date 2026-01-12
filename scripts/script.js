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