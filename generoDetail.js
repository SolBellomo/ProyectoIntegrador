

let proxy = 'https://cors-anywhere.herokuapp.com/'
let urlGenero = proxy + 'https://api.deezer.com/genre/' + id
/*
fetch(urlGenero)
  .then(function(response){
    return response.json();
  })
  .then(function(datos){
    console.log(datos);
    let image = document.querySelector(".imagen-genero");
    image.innerHTML = '<img src="' + datos.picture_medium + '" alt="">';
  })
  .catch(function(error){
    console.log(error);
  })

fetch()
.then(function(response){
  return response.json();
})
.then(function(datos){
  let image = document.querySelector(".cancionesss");
  image.innerHTML = '<img src="' + datos.picture_medium + '" alt="img">';

  let titulos = document.querySelector('.cancionesss');
  titulos.innerHTML = '<a href=""></a>' 
})*/

//A rezar

fetch(urlGenero)
    .then.then(function(response){
        return response.json();
        })
        .then(function(datos){
        console.log(datos);
        let image = document.querySelector(".artistasss");
        image.innerHTML += '<img src="' + datos.picture_big + '">';

        let titulo = document.querySelector('.titulo-artist');
        titulo.innerHTML += datos.name;
        let urlGenre = urlGenero + 'artists'

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
    })
.catch(function(error){
    console.log(error)
})