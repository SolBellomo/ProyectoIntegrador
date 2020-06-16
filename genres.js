let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);
let id = queryStringObj.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre'

fetch (url) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado){
    console.log(resultado);
    let generoArray = resultado.data; 
    let charts = document.querySelector('.seccion1');
    let divColumna = '';

  for(let i=1; i<generoArray.length; i++){ 

    divColumna += '      <div class="img-container1">'; 
    divColumna += '        <img src="' +  generoArray[i].picture + '" alt="' + generoArray[i].name + '" class= "img">';
    divColumna += '        <a href="generoDetail.html?id=' + generoArray[i].id + '"' + ' class="genero1">' + generoArray[i].name + '</a>';
    divColumna += '      </div>';
  }
  charts.innerHTML = divColumna;  
})

.catch(function(error){
  return console.log(error);
})

//artists género
 
let urlGenero = proxy + 'https://api.deezer.com/genre/' + id

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

  let titulo = document.querySelector('cancionesss');
  titulo.innerHTML = '<a href=""></a>'
})
