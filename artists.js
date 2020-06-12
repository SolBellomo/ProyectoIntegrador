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

