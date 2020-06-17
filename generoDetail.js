let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);
let id = queryStringObj.get('id');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre/' + id
let urlGenero = proxy + 'https://api.deezer.com/genre/' + id + '/artists'

//A rezar

fetch(url)
    .then(function(response){
        return response.json();
        })
        .then(function(datos){
        console.log(datos);
        let imagen = document.querySelector(".imagen-genero");
        imagen.innerHTML += '<img src="' + datos.picture_big + '">';

        //let titulo = document.querySelector('.titulo-artist');
        //titulo.innerHTML += datos.name;

    })
.catch(function(error){
    console.log(error)
})

fetch(urlGenero)
    .then(function(response){
        return response.json();
        })
        .then(function(datos){
        console.log(datos);
        let image = document.querySelector(".artistasss");
        let artistasGenero = datos.data;
        let artistas = '';
        for(let i=0; i<artistasGenero.length; i++){
          artistas += '<img src="' + artistasGenero[i].picture_big + '" class="imagenn" alt="' + artistasGenero[i].name + '">';
          artistas += '<a href="artistsDetail.html?id=' + artistasGenero[i].id + '"class="artistsGeneros">' + artistasGenero[i].name + '</a>';
        }
        image.innerHTML = artistas;

    })
.catch(function(error){
    console.log(error)
})
/*
fetch(urlGenre)
  .then(function(response){
    return response.json();
  })
  .then(function(datos){
    console.log(datos)
  })
.catch(function(error){
  console.log(error)
 })
 */