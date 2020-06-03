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

  for(let i=0; i<5; i++){ 

    divColumna += '<div class="columna">';
    divColumna += '      <div class="img-container">'; 
    divColumna += '        <img src="' +  artistaArray[i].picture + '" alt="' + artistaArray[i].name + '">';
    divColumna += '      </div>';
    divColumna += '        <a href="artistsDetail.html?id=' + artistaArray[i].id + '"' + ' class="artista1">' + artistaArray[i].name + '</a>';
    divColumna += '    </div>';
  }
  charts.innerHTML = divColumna;  
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

    for(let i=0; i<5; i++){

      seccion2div += '<div class="columna">';
      seccion2div += '                                <img src="' + albumArray[i].cover + '" alt="' + albumArray[i].title + '">' +
      '<img src="imagenes/gradient.jpg" alt="" class="gradient">';
      seccion2div += '                                <a href="artistsDetail.html" class="t"> ' + albumArray[i].title + '</a>';
      seccion2div += '                                <i class="fas fa-compact-disc disco"></i>';
      seccion2div += '                        </div>';

    }
    albuum.innerHTML = seccion2div;
  })
  .catch(function(error){
    return console.log(error);
  })



//EVENTOS

let boton = document.querySelector('.buscar');
  boton.onmouseover = function(){
    boton.color = 'red'; 
  }
  


//BARRA DE BÚSQUEDA

let results = document.querySelector('.buscar');

let queryString = location.search; //el primer atributo me permite bajar los datos de la url
let queryStringObj = new URLSearchParams(queryString); //para usar la API

let resultadosFormulario = queryStringObj.get('search');
console.log(resultadosFormulario)

let urlDeezer = '//Insertar url//';
let urll = urlDeezer + resultadosFormulario;
console.log(urll)

fetch(urll)
    .then(function(ResponseJson){
        return ResponseJson.json();
    })
    .then(function(busqueda){
        let results = document.querySelector('.buscar');
        let resultados = busqueda.data;

        resultados.forEach(function(resultado){
            results.innerHTML += '<h1>' + resultado.title + '</h1>' + '<img src="' + resultado.images.original.url + '">';
        })
        console.log(resultados)
    })
    .catch(function(error){
        console.log(error)
    })