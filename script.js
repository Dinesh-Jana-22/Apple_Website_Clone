const leftButton = document.querySelector(".left-button")
const rightButton = document.querySelector(".right-button")
const scrollContainer = document.querySelector(".slider-container")
const leftButton2 = document.getElementsByClassName("left-button")[1]
const rightButton2 = document.getElementsByClassName("right-button")[1]
const scrollContainer2 = document.getElementsByClassName("slider-container")[1]
const leftButton3 = document.getElementsByClassName("left-button")[2]
const rightButton3 = document.getElementsByClassName("right-button")[2]
const scrollContainer3 = document.getElementsByClassName("slider-container")[2]


rightButton.addEventListener('click',() => {
    scrollContainer.scrollLeft += 500
})


leftButton.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 500
})


rightButton2.addEventListener('click',() => {
    scrollContainer2.scrollLeft += 500
})


leftButton2.addEventListener('click', () => {
    scrollContainer2.scrollLeft -= 500
})


rightButton3.addEventListener('click',() => {
    scrollContainer3.scrollLeft += 500
})


leftButton3.addEventListener('click', () => {
    scrollContainer3.scrollLeft -= 500
})


