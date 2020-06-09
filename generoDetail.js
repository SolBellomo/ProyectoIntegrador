let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre'

fetch(url)
    .then(function(response){
        return response.json();
    }
    .then(function(datos){
        console.log(datos);
    
        let artists = document.querySelector('.artistass');
        let resultados = datos.title;

        resultados.forEach(function(artist){
            artistass.innerHTML += datos.genre.name
        })
    })
    .catch(function(error){
        console.log(error)
    })

    
fetch(url)
    .then(function(response){
    return response.json();
}
    .then(function(datos){
    console.log(datos);

    let artists = document.querySelector('.topp5');
    let resultados = datos.data;

    resultados.forEach(function(artist){
        artistass.innerHTML += '<li>' + '<a href="artistsDetail.html?id=' + artist.id + '">' + artist.name  + '</a></li>s'
    })
})
.catch(function(error){
    console.log(error)
})

fetch(url)
    .then(function(response){
        return response.json();
    }
    .then(function(datos){
        console.log(datos);
    
        let artists = document.querySelector('.favoritoss');
        let resultados = datos.data;

        resultados.forEach(function(artist){
            artistass.innerHTML += '<li>' + '<a href="artistsDetail.html?id=' + artist.id + '">' + artist.name  + '</a></li>'
        })
    })
    .catch(function(error){
        console.log(error)
    })

    let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/chart/0/artists'

fetch (url) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado){
    console.log(resultado);
    let artistaArray = resultado.data; 
    let charts = document.querySelector('.artistass');
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
