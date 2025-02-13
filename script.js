const leftButton = document.querySelector(".left-button")
const rightButton = document.querySelector(".right-button")
const scrollContainer = document.querySelector(".slider-container")




rightButton.addEventListener('click',() => {
    scrollContainer.scrollLeft += 500
})


leftButton.addEventListener('click', () => {
    scrollContainer.scrollLeft -= 500
})


