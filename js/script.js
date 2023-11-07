const slidesElem = document.querySelector(".slides");
//parte destra
const parteDestra = document.querySelector(".parteDestraImg")
//creo la variabile che conterrá tutte le righe di codice che verranno scritte nell'html
let imagesString = "";
//righe della parte di destra
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
//aggiugo alle immagini di destra il bordino e tolgo la sfocatura
slidesElemsDestra[currentSlideIndex].classList.add("attuale")
//costante per l'ultima posizione dell'array 
const fineArray = (images.length - 1)
//titolo e testo delle immagini
const titolo = document.getElementById("titolo")
const testo = document.getElementById("testo")
//inserisco nell'html il titolo e il testo della prima immagine nell'array di oggetti images che si trova nell'altro file js
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
        //tolgo la classe attuale per togliere il bordino all'immagine attuale
        slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
        //aumento l'indice
        currentSlideIndex++;
        //aggiungo la classe active per far apparire l'immagine successiva
        slidesElems[currentSlideIndex].classList.add("active");
        //aggiungo la classe attuale per far apparire il bordino all'immagine successiva
        slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }else 
    //se ci troviamo all'ultima ricominciamo da capo
    if(currentSlideIndex === slidesElems.length -1){
      //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      //tolgo la classe attuale per togliere il bordino all'immagine attuale
      slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
      //imposto l'indice alla prima immagine
      currentSlideIndex = 0;
      //aggiungo la classe active per far apparire la prima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
      //aggiungo la classe attuale per far apparire il bordino alla prima immagine
      slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }
    //cambio nell'html il titolo e il testo dell'immagine e li imposto con quelli dell'immagine successiva
    titolo.innerHTML= images[currentSlideIndex].title;
    testo.innerHTML= images[currentSlideIndex].text;
}

//funzione per tornare a quella precedente
function precedente(){
    // se non ci troviamo alla prima vado a quella successiva
    if(currentSlideIndex > 0){
        //tolgo la classe active per far sparire l'immagine attuale
        slidesElems[currentSlideIndex].classList.remove("active");
        //tolgo la classe attuale per togliere il bordino all'immagine attuale
        slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
        //decremento l'indice
        currentSlideIndex--;
        //aggiungo la classe active per far apparire l'immagine precedente
        slidesElems[currentSlideIndex].classList.add("active");
        //aggiungo la classe attuale per far apparire il bordino all'immagine successiva
        slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }else 
    //se ci troviamo alla prima passo all'ultima
    if(currentSlideIndex === 0){
    //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      //tolgo la classe attuale per togliere il bordino all'immagine attuale
      slidesElemsDestra[currentSlideIndex].classList.remove("attuale");
      //imposto l'indice all'ultima immagine
      currentSlideIndex = fineArray;
      //aggiungo la classe active per far apparire l'ultima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
      //aggiungo la classe attuale per far apparire il bordino all'ultima immagine
      slidesElemsDestra[currentSlideIndex].classList.add("attuale");
    }
    //cambio nell'html il titolo e il testo dell'immagine e li imposto con quelli dell'immagine precedente
    titolo.innerHTML= images[currentSlideIndex].title;
    testo.innerHTML= images[currentSlideIndex].text;
}