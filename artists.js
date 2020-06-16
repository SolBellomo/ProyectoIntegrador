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


//RESULTADOS BÚSQUEDA

let queryString2 = location.search; 
let queryStringObj2 = new URLSearchParams(queryString2);

let buscar = queryStringObj2.get('search'); 
console.log(buscar); 

urlArtista= proxy + 'https://api.deezer.com/search/artist?q=' + buscar; 
if(buscar !== null){
  fetch(urlArtista)
    .then(function (response) {
      return response.json();
    })
    .then(function (datos) {
      console.log(datos);
      let lista = document.querySelector('.todo-albums');
      lista.innerHTML = '';
      let artistaArrayy = datos.data;
      let divColumnaa = '';
      for (let i = 0; i < artistaArrayy.length; i++) {
        divColumnaa += '<div class="columna">';
        divColumnaa += '      <div class="img-container">';
        divColumnaa += '        <img src="' + artistaArrayy[i].picture_big + '" alt="' + artistaArrayy[i].name + '" class= "img">';
        divColumnaa += '      </div>';
        divColumnaa += '        <a href="artistsDetail.html?id=' + artistaArrayy[i] + '"' + ' class="artista1">' + artistaArrayy[i].name + '</a>';
        divColumnaa += '    </div>';
      }
      lista.innerHTML = divColumnaa;
    })
    .catch(function (error) {
      return console.log(error);
    })
}
