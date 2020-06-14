
//CARROUSEL ARTISTS

let slideIndex = 5;
showDivs(slideIndex);

function fotosExtra(fotos) {
  showDivs(slideIndex += fotos);
}
function showDivs(start){ // % --> resto de la división que quiero mostrar --> a%b te devuelve un numero entre 0 y b-1
  let carrusel = document.getElementsByClassName("seccionArtistass");
  start = start % carrusel.length; // devuelve numero entre 0 y carrusel.length - 1 (en este caso entre 0 y 9)
  let totalQueQuieroMostrar = 5; 
  if(carrusel.length < totalQueQuieroMostrar){ //Si hay menos de 5 elementos que los muestre todos
      totalQueQuieroMostrar = carrusel.length;
  } else {
    for(i = start + totalQueQuieroMostrar; i%carrusel.length != start%carrusel.length; i++){ 
      carrusel[i%carrusel.length].style.display = 'none'; //Para que no me muestre si traigo más de 5
    }
  }
  for(i = start; i< start + totalQueQuieroMostrar; i++){
      carrusel[i% carrusel.length].style.display = 'block';
  }
}
