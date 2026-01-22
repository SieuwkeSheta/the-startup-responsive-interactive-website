# Decathlon Design Challenge - Media Galerij
In sprint 6 heb ik de opdracht gekregen om in 2,5 week een media galerij van een product pagina te herontwerpen/ bouwen en de ontwerpkeuzes
te onderbouwen, door middel van de resultaten van een klantonderzoek wat is gedaan door Decathlon zelf.

Er is rekening gehouden met responsiveness en toegankelijkheid van de website voor eindgebruikers. Door middel van User-tests, een WCAG audit en Color Contrast tests.

Voor het maken van een JS interactie op de media galerij, heb ik eerst op meerdere e-commerce websites onderzoek gedaan en gekeken naar wat voor lay-out die gebruiken. Meerdere websites gebruiken 1 grote foto met meerdere kleine foto's om te navigeren, dus daar heb ik mij verder in verdiept.

Graag zou ik feedback willen op de lay-out die ik heb gebruik voor de media galerij en de popover/ lightbox.

#### Wie is Decathlon?

Decathlon is een internationale sportretailer met een sterke focus op online e-commerce.
Vanuit teams in Amsterdam, Lille en Parijs wordt er gewerkt aan de website en digitale
ervaring voor de 16 grootste landen. Decathlon werkt niet alleen met sportproducten, maar
ook met een reisplatform genaamd ‘Decathlon Travel’ waar mensen sportactiviteiten
kunnen onderzoeken en boeken.



## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
    * [HTML Structuur](#html-structuur)
    * [Belangrijke aspecten JS](#belangrijke-aspecten-js)
    * [Code conventies](#code-conventies)
    
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)



## Beschrijving
Uit het klantonderzoek van Decathlon zelf, is gebleken dat de media galerij werd ervaren als onoverzichtelijk en onduidelijk. 

<img width="300" alt="image" src="https://github.com/user-attachments/assets/dd541a8a-a9b6-460c-8033-be8543d785f9" /> 

>*Screenshot van een Decathlon product pagina media galerij op desktop*

<br>

<img width="300" alt="image" src="https://github.com/user-attachments/assets/52fe113a-e0ab-4179-9039-515a25189c6b" /> 

>*Screenshot van een Decathlon product pagina media galerij op tablet en mobile*

<br>

<img width="300" alt="image" src="https://github.com/user-attachments/assets/b6c6ffce-0a6d-46a3-a938-661689f78c35" />

>*Screenshot van een Decathlon product pagina lightbox*

Voor het ontwerpen van de media galerij, heb ik eerst gekeken naar andere e-commerce websites en de lay-out daarvan. Meerdere websites gebruiken 1 grote foto en meerdere kleine foto's voor de navigatie van het vergroten van de details. Daarnaast gebruiken velen een knop voor het scrollen tussen foto's. Zelf heb ik knoppen en een scrollbar gebruikt, voor toegankelijkheid en overzichtelijkheid.

<img width="1000" alt="Mock-up-Decathlon-Design-Challange" src="https://github.com/user-attachments/assets/68e40c74-cbd5-4805-ac44-bce3ada7103e" />

>*Mockup van gemaakte product pagina*

#### Responsive
De website is responsive en is Mobile first ontworpen en gemaakt. Ik heb gebruik gemaakt van breakpoints om de website op verschillende apparaten responsive te maken.

[Figma ontwerpen](https://www.figma.com/design/Rmq7HSfcswcyVyDYHo3aML/Decathlon-Design-Challenge?node-id=0-1&t=hClHwqqyBkVbvWYk-1)

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/239bf845-fe14-4e03-bb60-181f4b4461de" />

>*Mobile ontwerp*

<br>

<img width="200" alt="Image" src="https://github.com/user-attachments/assets/a5e4d58b-8852-400c-ae84-f438a329d0c0" />

>*Tablet ontwerp - Breakpoint 600px*

<br>

<img width="1000" alt="Image" src="https://github.com/user-attachments/assets/1469e810-7475-4469-8514-b001ac3ed929" />

>*Desktop ontwerp - Breakpoint 1200px*

#### Toegankelijk
Voor de toegankelijkheid heb ik [user-tests](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/15), [een WCAG Audit](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/17) en [Color Contrast Tests](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/18) uitgevoerd, uitgeschreven in issues en verwerkt. Alle foto's hebben een `[alt]`-attribuut en knoppen hebben een `<title>` zodat de elementen te lezen zijn met een screenreader.

- User tests zijn uitgevoerd op de media galerij interactie
- WCAG Audit is uitgevoerd door middel van de Lighthouse Accessibility test van Google Chrome en een handmatige test aan de hand van de checklist van de A11Y Project
- Color Contrast Tests zijn gedaan op de teksten, icons en input-element borders met behulp van de app 'Colour Contrast Analyser' van TPGI

#### Huisstijl
Decathlon heeft een overzichtelijke en uitgebreide huisstijl, waardoor het makkelijk over te nemen is in mijn ontwerpen. Ik heb eerst een [interface inventory](https://www.figma.com/design/Rmq7HSfcswcyVyDYHo3aML/Decathlon-Design-Challenge?node-id=54-45&t=eJ7i8VnLg41HCpd5-1) en een [styleguide](https://www.figma.com/design/Rmq7HSfcswcyVyDYHo3aML/Decathlon-Design-Challenge?node-id=60-32&t=eJ7i8VnLg41HCpd5-1) gemaakt in Figma. Daarna heb ik de kleuren, icons en knoppen geimplementeerd in mijn ontwerpen.

- De 'content brand color' is gebruikt voor de border van de kleine foto die aangeklikt is om de grote foto te laten zien. 
<img width="100" alt="image" src="https://github.com/user-attachments/assets/34a6f1e7-0c1d-4eeb-9750-96cc7a1e200e" />

- De knoppen zijn overgenomen van de Decathlon website
<img width="150" alt="image" src="https://github.com/user-attachments/assets/f5ef46f0-4ac2-48fa-9fe4-fe51ca78f3cf" />

- Hover states van bepaalde knoppen zijn gelijk aan de knoppen van de Decathlon website
<img width="95" alt="image" src="https://github.com/user-attachments/assets/4d77b67a-7c58-4ece-b6bd-2eddbdbb0180" />

#### Interactief
De media galerij is interactief gemaakt. De interactie is uitgeschreven en verwerkt in een [issue](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/10) met sub-issues.

De bedoeling van de interactie is dat als je op een kleine 'thumbnail' foto klikt, de grote foto die er boven staat, verandert in de kleine 'thumbnail' foto.

Feedforward: 
- 1 foto heeft een border en heeft een opacity van 100%, de rest van de foto's heeft dat niet
- De foto, die een border heeft en opacity 100%, is te zien als grote foto er boven
- Met een hover over de foto's krijgt de cursor een hand en krijgt de gehoverde foto opacity 100%

Feedback:
- Geklikte foto krijgt een border, andere foto met border krijgt minder opacity en de border wordt verwijderd
- Grote foto er boven verandert in de geklikte foto

https://github.com/user-attachments/assets/6e8b83a9-afba-4b56-bad2-06f34800691c

<br>

Als extra interactie heb ik een popover gebruikt om een lightbox/ vergroting van de media galerij te maken.

De bedoeling van de interctie is dat als je op de vergoot knop klikt, de lightbox open gaat en de foto's in een grotere media galerij te zien zijn.

Feedforward:
- Vergroot icon onder op grote foto
- Met een hover over de icon krijgt de cursor een hand en een achtergrond kleur + border
  
Feedback:
- Lightbox gaat open en laat een grotere media galerij zien

https://github.com/user-attachments/assets/623af084-bf62-4400-a173-6c19733811c0




## Kenmerken
Ik heb gebruik gemaakt van HTML, CSS en JS. 

### HTML Structuur
De HTML structuur van de pagina is semantisch opgebouwd. De pagina bevat een header met daarin 2 `<nav>`'s voor de navigatie, een main voor de inhoud en een footer.

### Belangrijke aspecten JS
Voor het maken van de media galerij heb ik meerdere video's gekeken en hulp gekregen van docenten. De kleine foto's zijn radiobuttons om ze interactief te maken. In JS verander ik de 'src' en 'alt' van de grote foto door die van de kleine foto waar op is geklikt met een 'change'-event van de radiobuttons.

https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/scripts/script.js#L39-L59

### Code conventies
#### Ademruimte en inspringen
Ademruimte en inspringen zorgen voor overzicht en het makkelijker kunnen aanpassen van je code. Ik begin block-level elementen op een nieuwe regel en laat inline-level elementen doorlopen op dezelfde regel tenzij er meerdere elementen in de inline-level elementen zitten. Dan zet ik ze onder elkaar.

Voorbeeld:
https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/index.html#L102-L109

#### Volgorde en nesten van CSS selectors
De volgorde van de HTML-structuur wordt aangehouden in de CSS en het nesten van de selectors. Ik heb gebruik gemaakt van custom-properties in de `:root` om het *DRY* principe aan te houden

Voorbeeld van custom-properties: 
https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/styles/styles.css#L33-L38

Voorbeeld van het nesten van CSS selectors:
https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/styles/styles.css#L198-L225

#### Nesten van media queries
De website is mobile first gemaakt. De media queries zijn genest in de elementen, waardoor de code overzichtelijker is en de responsiviteit per element makkelijk aan te passen is. 

Voorbeeld:
https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/styles/styles.css#L534-L551

#### Naamgeving
De classes heb ik in het engels geschreven en ik heb gebruik gemaakt van kebab-casing zodat de naam beter leesbaar is. Voor de custom-content heb ik algemene namen gebruikt zoals `--media-button-border-color:` zodat ik de kleur kan aanpassen zonder dat ik de naam hoef aan te passen.

Voorbeeld:
https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/blob/336cfaa4c661c61fe4385bafbb89b3b80b16e95c/styles/styles.css#L43-L45



## Bronnen
- [Ecommerce product page design HTML, CSS en JS @Rizowan Ahmed Safi](https://www.youtube.com/watch?v=F-6hvovxaSs)
- [Responsive / Mobile First design @FDND](https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/mobile-first.md)
- [Disney’s motion principles in designing interface animations](https://medium.com/@ruthiran_b/disneys-motion-principles-in-designing-interface-animations-9ac7707a2b43)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Refactoring en Code conventions @FDND](https://github.com/fdnd-task/the-startup-responsive-interactive-website/blob/main/docs/refactoring-code-conventions.md)



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


