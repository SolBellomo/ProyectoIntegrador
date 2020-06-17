let proxyy = 'https://cors-anywhere.herokuapp.com/'
let album = proxyy + 'https://api.deezer.com/chart/0/albums' 

fetch(album)
  .then(function(dataJson){
    return dataJson.json()
  })
  .then(function(results){
    console.log(results);
    let albumArray = results.data; 
    let albuum = document.querySelector('.seccion2');
    let seccion2div = '';

    for(let i=0; i<10; i++){

      seccion2div += '<div class="columna" style="text-align: center">';
      seccion2div += '                                <img src="' + albumArray[i].cover_medium + '" alt="' + albumArray[i].title + '">';
      seccion2div += '                                <a href="albumDetail.html?id=' + albumArray[i].id + '"' + ' class="t"> ' + albumArray[i].title + '</a>';
      seccion2div += '                        </div>';

    }
    albuum.innerHTML = seccion2div;
  })
  .catch(function(error){
    return console.log(error);
  })


//RESULTADOS BÚSQUEDA

let queryString2 = location.search; 
let queryStringObj2 = new URLSearchParams(queryString2);

let buscar = queryStringObj2.get('search'); 
console.log(buscar); 

urlAlbum = proxyy + 'https://api.deezer.com/search/album?q=' + buscar; 
if(buscar !== null){
  fetch(urlAlbum)
    .then(function (response) {
      return response.json();
    })
    .then(function (datos) {
      console.log(datos);
      let albuum = document.querySelector('.seccion2');
      let albumArray = datos.data;
      let seccion2div = '';
      for(let i=0; i<albumArray.length; i++){

        seccion2div += '<div class="columna" style="text-align: center">';
        seccion2div += '                                <img src="' + albumArray[i].cover_medium + '" alt="' + albumArray[i].title + '">';
        seccion2div += '                                <a href="albumDetail.html?id=' + albumArray[i].id + '"' + ' class="t"> ' + albumArray[i].title + '</a>';
        seccion2div += '                        </div>';
  
      }
      albuum.innerHTML = seccion2div;
    })
    .catch(function (error) {
      return console.log(error);
    })
}
  
  
