# Decathlon Design Challenge - Media Gallerij
In sprint 6 heb ik de opdracht gekregen om in 2,5 week een media gallerij van een product pagina te herontwerpen/ bouwen en de ontwerpkeuzes
te onderbouwen, doormiddel van de resultaten van een klantonderzoek wat is gedaan door Decathlon zelf.

Er is rekening gehouden met responsiveness en toegankelijkheid van de website voor eindgebruikers. Doormiddel van User-tests, een WCAG audit en Color Contrast tests.

Voor het maken van een JS interactie op de media gallerij, heb ik eerst op meerdere e-commerce websites onderzoek gedaan en gekeken naar wat voor lay-out die gebruiken. Velen gebruiken 1 grote foto met meerdere kleine foto's om te navigeren, dus daar heb ik mij verder in verdiept.

Graag zou ik feedback willen op de lay-out die ik heb gebruikt voor de media gallerij en de popover/ lightbox.

#### Wie is Decathlon?

Decathlon is een internationale sportretailer met een sterke focus op online e-commerce.
Vanuit teams in Amsterdam, Lille en Parijs wordt er gewerkt aan de website en digitale
ervaring voor de 16 grootste landen. Decathlon werkt niet alleen met sportproducten, maar
ook met een reisplatform genaamd ‘Decathlon Travel’ waar mensen sportactiviteiten
kunnen onderzoeken en boeken.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
    * [Code conventies](#code-conventies)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Het ontwerp
Uit het klantonderzoek van Decathlon zelf, is gebleken dat de media gallerij werd ervaren als onoverzichtelijk en onduidelijk. 

<img width="300" alt="image" src="https://github.com/user-attachments/assets/dd541a8a-a9b6-460c-8033-be8543d785f9" /> 

>*Screenshot van een Decathlon product pagina media gallerij op desktop*

<br>

<img width="300" alt="image" src="https://github.com/user-attachments/assets/52fe113a-e0ab-4179-9039-515a25189c6b" /> 

>*Screenshot van een Decathlon product pagina media gallerij op tablet en mobile*

<br>

<img width="300" alt="image" src="https://github.com/user-attachments/assets/b6c6ffce-0a6d-46a3-a938-661689f78c35" />

>*Screenshot van een Decathlon product pagina lightbox*

Voor het ontwerpen van de media gallerij, heb ik eerst gekeken naar andere e-commerce websites en de lay-out daarvan. Meerdere websites gebruiken 1 grote foto en meerdere kleine foto's voor de navigatie van het vergroten van de details. Daarnaast gebruiken velen een knop voor het scrollen tussen foto's. Zelf heb ik knoppen en een scrollbar gebruikt, voor toegankelijkheid en overzichtelijkheid.

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
Voor de toegankelijkheid heb ik [user-tests](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/15), [een WCAG Audit](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/17) en [Color Contrast Tests](https://github.com/SieuwkeSheta/the-startup-responsive-interactive-website/issues/18) uitgevoerd, uitgeschreven in issues en verwerkt. Alle foto's hebben een `[alt]`-tag en knoppen hebben een `<title>` zodat de elementen te lezen zijn met een screenreader.

- User tests zijn uitgevoerd op de media gallerij interactie
- WCAG Audit is uitgevoerd doormiddel van de Lighthouse Accessibility test van Google Chrome en een handmatige test aan de hand van de checklist van de A11Y Project
- Color Contrast Tests zijn gedaan op de teksten, icons en input-element borders met behulp van de app 'Colour Contrast Analyser' van TPGI

#### Huisstijl
Decathlon heeft een overzichtelijke en uitgebreide huisstijl, waardoor het makkelijk over te nemen is in mijn ontwerpen. Ik heb eerst een [interface inventory](https://www.figma.com/design/Rmq7HSfcswcyVyDYHo3aML/Decathlon-Design-Challenge?node-id=54-45&t=eJ7i8VnLg41HCpd5-1) en een [styleguide](https://www.figma.com/design/Rmq7HSfcswcyVyDYHo3aML/Decathlon-Design-Challenge?node-id=60-32&t=eJ7i8VnLg41HCpd5-1) gemaakt in Figma. Daarna heb ik de kleuren, icons en knoppen geimplementeerd in mijn ontwerpen.

- De 'content brand color' is gebruikt voor de border van de kleine foto die aangeklikt is om de grote foto te laten zien. 
<img width="100" alt="image" src="https://github.com/user-attachments/assets/34a6f1e7-0c1d-4eeb-9750-96cc7a1e200e" />

- De knoppen zijn overgenomen van de Decathlon website
<img width="150" alt="image" src="https://github.com/user-attachments/assets/f5ef46f0-4ac2-48fa-9fe4-fe51ca78f3cf" />

- Hover states van bepaalde knoppen zijn gelijk aan de knoppen van de Decathlon website
<img width="95" alt="image" src="https://github.com/user-attachments/assets/4d77b67a-7c58-4ece-b6bd-2eddbdbb0180" />





## Kenmerken
Ik heb gebruikt gemaakt van HTML, CSS en JS. 

### Code conventies
#### Ademruimte en inspringen

#### Volgorde en nesten van CSS selectors

#### Nesten van media queries

#### Naamgeving

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


