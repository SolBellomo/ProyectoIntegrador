//ARTIST

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/chart/0/artists'

fetch (url) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado){
    console.log(resultado);
    let artistaArray = resultado.data; 
    let charts = document.querySelector('.seccion1');
    let divColumna = '';

  for(let i=0; i<artistaArray.length; i++){ 
    divColumna += '                                        <div class="seccionArtistass">'
    divColumna += '<div class="columna-' + (i+1) +'">';
    divColumna += '      <div class="img-container">'; 
    divColumna += '        <img src="' +  artistaArray[i].picture_big + '" alt="' + artistaArray[i].name + '">';
    divColumna += '      </div>';
    divColumna += '        <a href="artistsDetail.html?id=' + artistaArray[i].id + '"' + ' class="artista1">' + artistaArray[i].name + '</a>';
    divColumna += '    </div>';
    divColumna += '                                        </div>'

  }
  charts.innerHTML = divColumna;  
  fotosExtra(0); //la estructura del carrusel empieza desde el artista 0
  
})

.catch(function(error){
  return console.log(error);
})



//ALBUMS 

let proxyy = 'https://cors-anywhere.herokuapp.com/'
let album = proxyy + 'https://api.deezer.com/chart/0/albums' 

fetch(album)
  .then(function(dataJson){
    return dataJson.json()
  })
  .then(function(results){
    console.log(results);
    let albumArray = results.data; 
    let albuum = document.querySelector('.seccion2');
    let seccion2div = '';

    for(let i=0; i<albumArray.length; i++){

      seccion2div += '                                        <div class="seccionAlbumss">'
      seccion2div += '<div class="columna-' + (i+1) +'">';
      seccion2div += '                                <img src="' + albumArray[i].cover_big + '" alt="' + albumArray[i].title + '">';
      seccion2div += '                                <a href="albumDetail.html?id=' + albumArray[i].id + '"' + ' class="t-albums"> ' + albumArray[i].title + '</a>';
      seccion2div += '                        </div>';
      seccion2div += '                                        </div>'

    }
    albuum.innerHTML = seccion2div;
    fotossExtra(0); 

  })
  .catch(function(error){
    return console.log(error);
  })


//TRACKS

let proxytracks = 'https://cors-anywhere.herokuapp.com/'
let tracks = proxytracks + 'https://api.deezer.com/chart/0/tracks' 

fetch(tracks)
  .then(function(dataJson){
    return dataJson.json()
  })
  .then(function(resultss){
    console.log(resultss);
    let tracksArray = resultss.data; 
    let canciones = document.querySelector('.seccion3');
    let seccion3div = '';

    for(let i=0; i<tracksArray.length; i++){

      seccion3div += '                                        <div class="seccionTracks">'
      seccion3div += '<div class="columna-' + (i+1) +'">';
      seccion3div += '                                <img src="' + tracksArray[i].artist.picture_big + '" alt="' + tracksArray[i].title + '<br>' + tracksArray[i].artist.name + '">';
      seccion3div += '                                <a href="trackDetail.html?id=' + tracksArray[i].id + '"' + ' class="tracks"> ' + tracksArray[i].title + '<br>' + tracksArray[i].artist.name + '</a>';
      seccion3div += '                        </div>';
      seccion3div += '                                        </div>'
      
    }
    canciones.innerHTML = seccion3div;
    fotosExtra3(0);
  })
  
  .catch(function(error){
    return console.log(error);
  })
 
//GENRES

let proxygeneros = 'https://cors-anywhere.herokuapp.com/'
let genres = proxygeneros + 'https://api.deezer.com/genre' 

fetch(genres)
  .then(function(dataJson){
    return dataJson.json()
  })
  .then(function(resultadoos){
    console.log(resultadoos);
    let genresArray = resultadoos.data; 
    let generos = document.querySelector('.seccion4');
    let seccion4div = '';

    for(let i=1; i<genresArray.length; i++){

      seccion4div += '                                        <div class="seccionGenres">'
      seccion4div += '<div class="columna-' + (i+1) +' ">';
      seccion4div += '                                <img src="' + genresArray[i].picture_medium + '" alt="' + genresArray[i].name + '">';
      seccion4div += '                                <a href="generoDetail.html?id=' + genresArray[i].id + '"' + ' class="genres"> ' + genresArray[i].name + '</a>';
      seccion4div += '                        </div>';
      seccion4div += '                                        </div>'

    }
    generos.innerHTML = seccion4div;
    fotosExtra4(0);

  })
  
  .catch(function(error){
    return console.log(error);
  })


//BARRA DE BÚSQUEDA

let results = document.querySelector('.buscar');

let queryString = location.search; //el primer atributo me permite bajar los datos de la url
let queryStringObj = new URLSearchParams(queryString); //para usar la API e interpretarla

let resultadosFormulario = queryStringObj.get('search'); //nombre del parámetro
console.log(resultadosFormulario)

let urlDeezer = 'https://api.deezer.com/search/album?q=' + resultadosFormulario;
console.log(urlDeezer)

fetch(urlDeezer)
    .then(function(ResponseJson){
        return ResponseJson.json();
    })
    .then(function(busqueda){
        let results = document.querySelector('search-results');
        let resultados = busqueda.data;

        resultados.forEach(function(resultado){
            results.innerHTML += '<h1>' + resultado.title + '</h1>' + '<img src="' + resultado.images.original.url + '">';
        })
        console.log(resultados)
    })
    .catch(function(error){
        console.log(error)
    })


    