let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/chart/0/artists'

fetch (url) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado){
    console.log(resultado);
    let artistaArray = resultado.data; 
    let charts = document.querySelector('.todo-albums');
    let divColumna = '';

  for(let i=0; i<artistaArray.length; i++){ 

    divColumna += '<div class="columna">';
    divColumna += '      <div class="img-container">'; 
    divColumna += '        <img src="' +  artistaArray[i].picture + '" alt="' + artistaArray[i].name + '" class= "img">';
    divColumna += '      </div>';
    divColumna += '        <a href="artistsDetail.html?id=' + artistaArray[i].id + '"' + ' class="artista1">' + artistaArray[i].name + '</a>';
    divColumna += '    </div>';
  }
  charts.innerHTML = divColumna;  
})

.catch(function(error){
  return console.log(error);
})


//barra búsqueda
/*
let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

console.log(queryString); 
console.log(queryStringObj); 

let buscar = queryStringObj.get('search'); 
console.log(buscar); 


urlArtista= proxy + 'https://api.deezer.com/search/artist?q=' + buscar; 

  fetch(urlArtista)
    .then(function(response){
      return response.json(); 
    })
    .then(function(datos){
      console.log(datos); 

      let lista = document.querySelector('.todo-albums');
      let resultados = datos.data; 

      resultados.forEach(function(resultado) {
            lista.innerHTML += '<div>' + '<img src="' +  resultado.picture  + '"></img class="fotoArtistasBusqueda">' + resultado.name + '</div>'
        });
        console.log(datos)
    });
    */
