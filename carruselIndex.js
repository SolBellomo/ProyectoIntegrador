
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

//CARRUSEL ALBUMS
let slideIndex1 = 5;
showDivs1(slideIndex1);

function fotossExtra(fotoss) {
  showDivs1(slideIndex1 += fotoss);
}
function showDivs1(startt){ 
  let carrusel2 = document.getElementsByClassName("seccionAlbumss");
  startt = startt % carrusel2.length; 
  let totalQueQuieroMostrarr = 5; 
  if(carrusel2.length < totalQueQuieroMostrarr){ 
      totalQueQuieroMostrarr = carrusel2.length;
  } else {
    for(i = startt + totalQueQuieroMostrarr; i%carrusel2.length != startt%carrusel2.length; i++){ 
      carrusel2[i%carrusel2.length].style.display = 'none'; 
    }
  }
  for(i = startt; i< startt + totalQueQuieroMostrarr; i++){
      carrusel2[i% carrusel2.length].style.display = 'block';
  }
}

//CARRUSEL GENRES

let slideIndexGenres = 5;
showDivsGenres(slideIndexGenres);

function fotosExtra4(fotosGenres) {
  showDivsGenres(slideIndexGenres += fotosGenres);
}
function showDivsGenres(start4){ 
  let carruselGenres = document.getElementsByClassName("seccionGenres");
  start4 = start4 % carruselGenres.length; 
  let GenerosQueQuieroMostrar = 5; 
  if(carruselGenres.length < GenerosQueQuieroMostrar){ 
    GenerosQueQuieroMostrar = carruselGenres.length;
  } else {
    for(i = start4 + GenerosQueQuieroMostrar; i%carruselGenres.length != start4%carruselGenres.length; i++){ 
      carruselGenres[i%carruselGenres.length].style.display = 'none'; 
    }
  }
  for(i = start4; i< start4 + GenerosQueQuieroMostrar; i++){
    carruselGenres[i% carruselGenres.length].style.display = 'block';
  }
}

//CARRUSEL TRACKS

let slideIndexTracks = 5;
showDivsTracks(slideIndexTracks);

function fotosExtra3(fotosTracks) {
  showDivsTracks(slideIndexTracks += fotosTracks);
}
function showDivsTracks(start3){ 
  let carruselTracks = document.getElementsByClassName("seccionTracks");
  start3 = start3 % carruselTracks.length; 
  let TracksQueQuieroMostrar = 5; 
  if(carruselTracks.length < TracksQueQuieroMostrar){ 
    TracksQueQuieroMostrar = carruselTracks.length;
  } else {
    for(i = start3 + TracksQueQuieroMostrar; i%carruselTracks.length != start3%carruselTracks.length; i++){ 
      carruselTracks[i%carruselTracks.length].style.display = 'none'; 
    }
  }
  for(i = start3; i< start3 + TracksQueQuieroMostrar; i++){
    carruselTracks[i% carruselTracks.length].style.display = 'block';
  }
}