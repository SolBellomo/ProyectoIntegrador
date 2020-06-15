
//DETAIL ARTISTA

let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

let idArtista = queryStringObj.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/artist/' + idArtista

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
            console.log(resultado)
            let avatar = document.querySelector('.avatar');
            avatar.src = resultado.picture_medium; 

            let name = document.querySelector('.name');
            name.innerHTML = resultado.name;

    })
    .catch(function(error){
        console.log(error);
    })

//Canciones Artistas

let proxy4 = 'https://cors-anywhere.herokuapp.com/'
let url4 = proxy4 + 'https://api.deezer.com/artist/' + idArtista

fetch (url4) 
  .then(function(dataJson){
  return dataJson.json()
  })
  .then(function(resultado4){
    console.log(resultado4);
    let cancionArray = resultado4.data; 
    let cancion = document.querySelector('.audiiios');
    let divColumna = '';
    for(let i=0; i<cancionArray.length; i++){
      divColumna += '<div class="cancioon">'
      divColumna += '<a href="trackDetail.html?id="' + url.tracklist + '>'
      divColumna += '</div>'
    }
    //let charts = document.querySelector('.horacioPlayer');
    //charts.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idArtista + '&app_id=1'

    console.log(idArtista)
})
.catch(function(error){
  return console.log(error);
})

//ARTISTAS RECOMENDADOS 

    let proxy2 = 'https://cors-anywhere.herokuapp.com/'
    let url2 = proxy2 + 'https://api.deezer.com/artist/27/related'
    
    fetch (url2) 
      .then(function(dataJson){
      return dataJson.json()
      })
      .then(function(resultado2){
        console.log(resultado2);
        let artistaArray = resultado2.data; 
        let charts = document.querySelector('.otros');
        let divColumna = '';
    
      for(let i=0; i<5; i++){ 
    
        divColumna += '    <div>';
        divColumna += '                              <div class="img-container">';
        divColumna += '        <img src="' +  artistaArray[i].picture + '" alt="' + artistaArray[i].name + '">';
        divColumna += '      </div>';
        divColumna += '        <a href="artistsDetail.html?id=' + artistaArray[i].id + '"' + '>' + artistaArray[i].name + '</a>';
        divColumna += '    </div>';
      }
      charts.innerHTML = divColumna;  
    })
    
    .catch(function(error){
      return console.log(error);
    })


//ALBUMS DETAIL

    let proxy3 = 'https://cors-anywhere.herokuapp.com/'
    let url3 = proxy3 + 'https://api.deezer.com/chart/0/albums'
    
    fetch (url3) 
      .then(function(dataJson){
      return dataJson.json()
      })
      .then(function(resultado3){
        console.log(resultado3);
        let albumdetail = resultado3.data; 
        let album = document.querySelector('.albums');
        let divAlbum = '';
    
      for(let i=0; i<5; i++){ 
    
        divAlbum += '    <div>';
        divAlbum += '                              <div class="img-container">';
        divAlbum += '        <img src="' +  albumdetail[i].cover + '" alt="' + albumdetail[i].title + '">';
        divAlbum += '      </div>';
        divAlbum += '        <a href="albumDetail.html?id=' + albumdetail[i].id + '"' + '>' + albumdetail[i].title + '</a>';
        divAlbum += '    </div>';
      }
      album.innerHTML = divAlbum;  
    })

    .catch(function(error){
      return console.log(error);
    })
