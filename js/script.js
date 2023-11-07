const slidesElem = document.querySelector(".slides");
//creo la variabile che conterrá tutte le righe di codice che verranno scritte nell'html
let imagesString = "";
//ciclo per scrivere le righe di codice dentro la variabile 
for (let i = 0; i < images.length; i++) {
    const curImage = images[i].image;
    imagesString += `<img class="slide-image item" src="${curImage}" alt="">`

} 
//inserisco le scritte dentro l'html
slidesElem.innerHTML = imagesString;

//manipolazione di elementi: mostrare le immagini
const slidesElems = document.querySelectorAll(".slide-image")
//visualizzo il primo elemento
let currentSlideIndex = 0
slidesElems[currentSlideIndex].classList.add("active")
//costante per l'ultima posizione dell'array 
const fineArray = (images.length - 1)


//freccia superiore che una volta cliccata mi cambierá l'immagine in quella successiva 
document.getElementById("up-arrow").addEventListener("click", function(event) {
    event.preventDefault()
    //se non ci troviamo all'ultima immagine 
    if(currentSlideIndex < fineArray){
        //vado all'immagine successiva
        //tolgo la classe active per far sparire l'immagine attuale
        slidesElems[currentSlideIndex].classList.remove("active");
        //aumento l'indice
        currentSlideIndex++;
        //aggiungo la classe active per far apparire l'immagine successiva
        slidesElems[currentSlideIndex].classList.add("active");
    }else 
    //se ci troviamo all'ultima ricominciamo da capo
    if(currentSlideIndex === slidesElems.length -1){
      //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      //imposto l'indice alla prima immagine
      currentSlideIndex = 0;
      //aggiungo la classe active per far apparire la prima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
    }

})

//freccia inferiore che una volta cliccata mi camberá l'immagine in quella precedente
document.getElementById("down-arrow").addEventListener("click", function(event) {
    event.preventDefault()
    // se non ci troviamo alla prima vado a quella successiva
    if(currentSlideIndex > 0){
        //tolgo la classe active per far sparire l'immagine attuale
        slidesElems[currentSlideIndex].classList.remove("active");
        //decremento l'indice
        currentSlideIndex--;
        //aggiungo la classe active per far apparire l'immagine precedente
        slidesElems[currentSlideIndex].classList.add("active");
    }else 
    //se ci troviamo alla prima passo all'ultima
    if(currentSlideIndex === 0){
    //tolgo la classe active per far sparire l'immagine attuale
      slidesElems[currentSlideIndex].classList.remove("active");
      //imposto l'indice all'ultima immagine
      currentSlideIndex = fineArray;
      //aggiungo la classe active per far apparire l'ultima immagine 
      slidesElems[currentSlideIndex].classList.add("active");
    }
    
})