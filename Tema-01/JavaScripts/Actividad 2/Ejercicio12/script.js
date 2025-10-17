window.addEventListener("load", () => {
    alert("Para ver la mejor tarea que te han entregado haz click en cualquier parte del navegador y pasa por encima de cada imagen.");
});

// Como he visto que era el ultimo ejercicio y era muy simple le he añadido algunas cosillas mas
function ponerBordes(elemento, rutaSonido) {
    elemento.style.borderRadius = "50%";
    elemento.style.boxShadow = "0 0 40px 10px rgba(0, 255, 255, 0.7)";
    elemento.style.transform = "scale(1.2) rotate(5deg)";
    elemento.style.filter = "brightness(1.1) saturate(1.3)";
    elemento.style.transition = "all 0.5s ease";

    sonidoActual = new Audio(rutaSonido);
    sonidoActual.loop = true;
    sonidoActual.volume = 1.0;
    sonidoActual.play();
}

function quitarBordes(elemento) {
    elemento.style.borderRadius = "0";
    elemento.style.boxShadow = "none";
    elemento.style.transform = "scale(1) rotate(0deg)";
    elemento.style.filter = "brightness(1) saturate(1)";

    if (sonidoActual) {
        sonidoActual.pause();
        sonidoActual.currentTime = 0;
        sonidoActual = null;
    }
}
