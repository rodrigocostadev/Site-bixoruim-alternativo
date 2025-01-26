





//////////////////////////////////////////////////////////////////////////
////////////////////// SLIDE DE FOTOS NA AREA FOTOS //////////////////////

// let divSlider = document.getElementById("div-slider")
let divSlider = document.getElementById("slides")
let overlay = document.getElementById("overlay")


let images = [
    {file:"assets/rock1.jpg"},{file:"assets/rock2.jpg"},
    {file:"assets/rock3.jpg"},{file:"assets/rock4.jpg"},
    {file:"assets/rock8.jpg"},{file:"assets/rock6.jpg"},
    {file:"assets/rock7.jpg"},{file:"assets/rock5.jpg"}
]

// Define a primeira imagem
divSlider.style.backgroundImage = `url(${images[0].file})`
divSlider.style.backgroundSize = "cover"

let index = 0
let interval


function updateImage(){
    divSlider.style.backgroundPosition = "center" 
    divSlider.style.backgroundImage = `url(${images[index].file})`
    divSlider.style.backgroundSize = "contain"  
    divSlider.style.backgroundRepeat = "no-repeat"
}

function backImage(){
    index--
    if (index >= images.length){
        index = 0
    }
    updateImage()
    resetInterval()
}

function nextImage(){
    index++
    if (index >= images.length){
        index = 0
    }
    updateImage()
    resetInterval()
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(autoPlaySlide,5000)
}

function autoPlaySlide(){
    // overlay.style.opacity = 1
    divSlider.className = "dark-image"

    setTimeout(() => {        
        nextImage()

        // overlay.style.opacity = 0    
        divSlider.style.transition = "filter 0.5s ease"   
        divSlider.className = ""         
        // divSlider.style.filter = "brightness(90%)"       

    },500) 

}

// setInterval(autoPlaySlide,5000)
interval = setInterval(autoPlaySlide,5000)
// resetInterval()

// updateImage()




//////////////////////////////////////////////////////////////////////////
////////////////////// SEGUNDA TENTATIVA //////////////////////

// function backImage(){
//     console.log("teste")
//     index --
// }

// function nextImage(){
//     overlay.style.opacity = 1

//     setTimeout(() => {        
//         index++
//         if (index >= images.length){
//             index = 0
//         }

//         divSlider.style.backgroundPosition = "center" 
//         divSlider.style.backgroundImage = `url(${images[index].file})`
//         divSlider.style.backgroundSize = "contain"  
//         divSlider.style.backgroundRepeat = "no-repeat"

//         overlay.style.opacity = 0

        

//     },500) 

// }

// setInterval(nextImage,5000)








//////////////////////////////////////////////////////////////////////////
////////////////////// MANEIRA INICIAL //////////////////////

// let index = 0

// function nextImage(index){
    
//     overlay.style.opacity = 0
//     divSlider.style.backgroundImage = `url(${images[index].file})`
//     divSlider.style.backgroundSize = "cover" 
//     // divSlider.style.backgroundSize = "contain"  
//     // divSlider.style.backgroundRepeat = "no-repeat"
//     divSlider.style.transition = "1s"    

// }

// setInterval(function(){
//     nextImage(index)
//     index ++

//     if (index >= images.length){
//         index = 0
//     }
    
// }
// ,4000)










