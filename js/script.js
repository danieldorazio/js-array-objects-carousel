const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/************************************************************************/
const itemsElem = document.querySelector(".items");




//Funzione che mi apre l'array di oggetti e mi analizza gli elementi
let curObjectImage;
let curObjectTitlie;
let curObjectText;

let itemElem ="";

images.forEach((curObject) => {
    curObjectImage = curObject.image;
    curObjectTitlie = curObject.title;
    curObjectText = curObject.text;

// FUNZIONE CHE MI VA A CREARE GLI ELEMENTI NEL DOM
    itemElem += `
            <div class="item">
                <img src="${curObjectImage}" alt="">
                <div class="text">
                    <h3>${curObjectTitlie}</h3>
                    <p>${curObjectText}</p>
                </div>
            </div>`
});

itemsElem.innerHTML += (itemElem);


//FUNZIONE CHE QUANDO CLICCO IL BOTTONE MI METTE ACTIVE
const prev = document.querySelector(".prev").addEventListener("click", function() {
    console.log("cliccato prev");
})


const item = document.querySelector(".item");
item.classList.add("active");








/************************************************************************************************************************/

// const img = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
// const itemsElem = document.querySelector(".items");

// let imgTag = "";

// for (i = 0; i < img.length; i++) {
//     const curImg = img[i];
//     imgTag += 
//      `<div class="item">
//         <img src="${curImg}" alt="">
//     </div>`;
// }

// itemsElem.innerHTML += imgTag;

// //trovare elemento "prev" "next" nella pagina questa ricerca va fatta sotto itemsElem.innerHTML += imgTag; perche senno non funzionando andado ad cancellare gli elementi prev e next
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");


// const photo = document.querySelectorAll(".item");

// let indiceImg = 0;
// photo[indiceImg].classList.add("active");


// nextButton.addEventListener ("click", function(){

//     photo[indiceImg].classList.remove ("active");

//     if(indiceImg < photo.length -1) {
//         indiceImg++; 

//     } else {
//         indiceImg = 0;
//     }

//     photo[indiceImg].classList.add ("active");
// })





// prevButton.addEventListener ("click", function(){

//     photo[indiceImg].classList.remove ("active");
//     if(indiceImg > 0) {
//         indiceImg--;

//     } else {
//         indiceImg = photo.length -1;
        
//     }
    
//     photo[indiceImg].classList.add ("active");
// })



// let autoScrolling;

// itemsElem.addEventListener("mouseout", function () {
//     autoScrolling = setInterval (function () {
//         photo[indiceImg].classList.remove ("active");
//         if(indiceImg < photo.length -1) {
//             indiceImg++; 
    
//         } else {
//             indiceImg = 0;
//         }
    
//         photo[indiceImg].classList.add ("active");  
    
    
//     }, 1000);
// })


// itemsElem.addEventListener("mouseover", function () {
//     clearInterval(autoScrolling);  
// })



