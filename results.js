let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

console.log(queryString); 
console.log(queryStringObj); 

let buscar = queryStringObj.get('search'); 
console.log(buscar); 

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/search/track?q=' + buscar; 

fetch(url)
    .then(function(response){
        return response.json(); 
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadosTracks');
        let resultados = datos.data; 

        resultados.forEach(function(resultado) {
            lista.innerHTML += '<li>' + resultado.title + '</li>';
        });
        console.log(datos)
    })
.catch(function(error){
    return console.log(error);
  })
 

urlArtista= proxy + 'https://api.deezer.com/search/artist?q=' + buscar; 

fetch(urlArtista)
    .then(function(response){
        return response.json(); 
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.resultadosArtist');
        let resultados = datos.data; 

        resultados.forEach(function(resultado) {
            lista.innerHTML += '<li>' + '<img src="' +  resultado.picture  + '"></img class="fotoArtistasBusqueda">' + resultado.name + '</li>'
        });
        console.log(datos)
    })
.catch(function(error){
    return console.log(error);
  })
 


urlAlbum = proxy + 'https://api.deezer.com/search/album?q=' + buscar; 

  fetch(urlAlbum)
      .then(function(response){
          return response.json(); 
      })
      .then(function(datos){
          console.log(datos);
          let lista = document.querySelector('.resultadosAlbums');
          let resultados = datos.data; 
  
          resultados.forEach(function(resultado) {
              lista.innerHTML += '<li>' + '<img src="' +  resultado.cover  + '"></img class="fotoArtistasBusqueda">' + resultado.title + '</li>'
          });
          console.log(datos)
      })
  .catch(function(error){
      return console.log(error);
    })


//INTENTANDO LOADER

let myVar;

function myFunction() {
      myVar = setTimeout(showPage, 3000);
    }
    
function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("mostrar").style.display = "block";
    }