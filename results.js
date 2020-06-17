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
            lista.innerHTML += '<li><a href="trackDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.album.cover_medium + '" alt="' + resultado.title + '<br>' + resultado.name + '"><p>' + resultado.title + '<br>' + resultado.artist.name + '</p></div></a></li>'
            
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
            lista.innerHTML += '<li><a href="artistsDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.picture_big + '" alt="' + resultado.name + '"class="fotoArtistasBusqueda"><p>' + resultado.name + '</p></div></a></li>'
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
              lista.innerHTML += '<li><a href="albumDetail.html?id=' + resultado.id + '"' + ' class="tracks1"><div class="columna"><img src="' + resultado.cover_medium + '" alt="' + resultado.title + '"class="fotoArtistasBusqueda"><p>' + resultado.title + '</p></div></a></li>'
          });
          console.log(datos)
      })
  .catch(function(error){
      return console.log(error);
    })


