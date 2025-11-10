function IntercambiarPosiciones(){

    const imagen1 = document.getElementById('img1');
    const imagen2 = document.getElementById('img2');


    // Si imagen1 esta en esta posicion entonces intercambiamos posiciones
    if (imagen1.src.includes("img/pro.png")){
        imagen1.src = "img/spiderman.png"
        imagen2.src = "img/pro.png"
    }else {// Si no se quedan donde están
        imagen1.src = "img/pro.png"
        imagen2.src = "img/spiderman.png"
    }
}
