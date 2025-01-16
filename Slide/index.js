const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`
    }
)
// (slide, image) slide img ha ior index 0123

const goPrev = () => {
    // counter--
    // slideImage()
    if(counter !=0){
        counter--
        slideImage()
    }
}
const goNext = () => {
    // counter++
    // slideImage()
   if(counter < slides.length-1){
    counter++
    slideImage()
   }
}
// if(counter < slides.length-1) iska matlab counter to 0 hai or slides ke andar value hai or ham waha pe 3 bhi daal sakhte hai
const slideImage = () => {

    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
// learn transform and translate
