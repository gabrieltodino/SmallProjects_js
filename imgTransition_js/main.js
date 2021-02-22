var imageIndex = 0,
    images = document.querySelectorAll('.container img'),
    max = images.length-1

function start(){
    images[imageIndex].classList.remove('selected')

    if(imageIndex == max){
        imageIndex = -1
    }

    imageIndex++

    images[imageIndex].classList.add('selected')

}

window.addEventListener("load", () => {
    setInterval(start,4000)
})