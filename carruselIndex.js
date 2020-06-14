
//CARROUSEL ARTISTS

let slideIndex = 5;
showDivs(slideIndex);

function fotosExtra(fotos) {
  showDivs(slideIndex += fotos);
}
function showDivs(start){
  let carrusel = document.getElementsByClassName("seccionArtistass");
  console.log(carrusel);
  start = start % carrusel.length;
  console.log(start);
  let totalToShow = 5;
  if(carrusel.length < totalToShow){
      start = 0;
      totalToShow = carrusel.length;
  } else {
    for(i = start + totalToShow; i%carrusel.length != start%carrusel.length; i++){
      console.log('Bye ' + i);
      carrusel[i%carrusel.length].style.display = 'none';
    }
  }
  for(i = start; i< start + totalToShow; i++){
      console.log('Hi ' + i);
      carrusel[i% carrusel.length].style.display = 'block';
  }
}
