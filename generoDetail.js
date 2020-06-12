let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre/0'

fetch (url) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado){
    console.log(resultado);
    let generoArray = resultado.data; 
    let charts = document.querySelector('.todo-generos');
    let divColumna = '';

  for(let i=0; i<artistaArray.length; i++){ 

    divColumna += '<div class="columna">';
    divColumna += '      <div class="img-container">'; 
    divColumna += '        <img src="' +  generoArray[i].picture + '" alt="' + generoArray[i].name + '" class= "img">';
    divColumna += '      </div>';
    divColumna += '        <a href="artistsDetail.html?id=' + generoArray[i].id + '"' + ' class="genero1">' + generoArray[i].name + '</a>';
    divColumna += '    </div>';
  }
  charts.innerHTML = divColumna;  
})

.catch(function(error){
  return console.log(error);
})