// En tu archivo JavaScript
const scrollingText = document.querySelector('.scrolling-text');

function scrollText() {
    scrollingText.scrollTop += 1; // Ajusta la velocidad de desplazamiento
}

setInterval(scrollText, 50); // Cambia el valor para controlar la velocidad