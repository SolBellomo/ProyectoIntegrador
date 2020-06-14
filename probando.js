let slideIndex = 5;
showDivs(slideIndex);

function fotosExtra(fotos) {
  showDivs(slideIndex += fotos);
}

function showDivs(fotos) {
  let carrusel = document.getElementsByClassName("seccionArtistass");
  if (fotos > carrusel.length) {slideIndex = 5}
  if (fotos < 5) {slideIndex = carrusel.length} ;
  for (i = 0; i < 5; i++) {
    carrusel[i].style.display = 'none';
  }
  carrusel[slideIndex-5].style.display = "block";
}

