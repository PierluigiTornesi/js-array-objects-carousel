const slidesElem = document.querySelector(".slides");
const parteDestra = document.querySelector(".parteDestraImg")
//creo la variabile che conterrá tutte le righe di codice che verranno scritte nell'html
let imagesString = "";
let imageStringDestra = "";
//ciclo per scrivere le righe di codice dentro la variabile 
for (let i = 0; i < images.length; i++) {
    const curImage = images[i].image;
    imagesString += `<img class="slide-image item" src="${curImage}" alt="">`
    imageStringDestra += `<img class="image-destra" src="${curImage}" alt="">`
} 
//inserisco le scritte dentro l'html
slidesElem.innerHTML = imagesString;
parteDestra.innerHTML = imageStringDestra;
//manipolazione di elementi: mostrare le immagini
const slidesElems = document.querySelectorAll(".slide-image")
const slidesElemsDestra = document.querySelectorAll(".image-destra")
//visualizzo il primo elemento
let currentSlideIndex = 0
slidesElems[currentSlideIndex].classList.add("active")
slidesElemsDestra[currentSlideIndex].classList.add("attuale")
//costante per l'ultima posizione dell'array 
const fineArray = (images.length - 1)
//titolo e testo delle immagini
const titolo = document.getElementById("titolo")
const testo = document.getElementById("testo")
titolo.innerHTML = images[0].title;
testo.innerHTML = images[0].text;

//freccia superiore che una volta cliccata mi cambierá l'immagine in quella successiva 
document.getElementById("up-arrow").addEventListener("click", function(event) {
    event.preventDefault()
    prossima();
})
//freccia inferiore che una volta cliccata mi camberá l'immagine in quella precedente
document.getElementById("down-arrow").addEventListener("click", function(event) {
    event.preventDefault()
    precedente();
})
//autoplay delle immagini
const autoPlay = setInterval(prossima,3000)



//funzione per andare alla prossima
function prossima(){
    //se non ci troviamo all'ultima immagine 
    if(currentSlideIndex < fineArray){
        //vado all'immagine successiva
        //tolgo la classe active per far sparire l'immagine attuale
        slidesElems[currentSlideIndex].classList.remove("active");
        slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
        //aumento l'indice
        currentSlideIndex++;
        //aggiungo la classe active per far apparire l'immagine successiva
        slidesElems[currentSlideIndex].classList.add("active");
        slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }else 
    //se ci troviamo all'ultima ricominciamo da capo
    if(currentSlideIndex === slidesElems.length -1){
      //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
      //imposto l'indice alla prima immagine
      currentSlideIndex = 0;
      //aggiungo la classe active per far apparire la prima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
      slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }
    titolo.innerHTML= images[currentSlideIndex].title;
    testo.innerHTML= images[currentSlideIndex].text;
}

//funzione per tornare a quella precedente
function precedente(){
    // se non ci troviamo alla prima vado a quella successiva
    if(currentSlideIndex > 0){
        //tolgo la classe active per far sparire l'immagine attuale
        slidesElems[currentSlideIndex].classList.remove("active");
        slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
        //decremento l'indice
        currentSlideIndex--;
        //aggiungo la classe active per far apparire l'immagine precedente
        slidesElems[currentSlideIndex].classList.add("active");
        slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }else 
    //se ci troviamo alla prima passo all'ultima
    if(currentSlideIndex === 0){
    //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
      //imposto l'indice all'ultima immagine
      currentSlideIndex = fineArray;
      //aggiungo la classe active per far apparire l'ultima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
      slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }
    titolo.innerHTML= images[currentSlideIndex].title;
    testo.innerHTML= images[currentSlideIndex].text;
}