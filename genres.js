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
    divColumna += '        <a href="genres.html?id=' + generoArray[i].id + '"' + ' class="genero1">' + generoArray[i].name + '</a>';
    divColumna += '      </div>';
  }
  charts.innerHTML = divColumna;  
})

.catch(function(error){
  return console.log(error);
})