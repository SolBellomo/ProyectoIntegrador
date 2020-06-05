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

      seccion2div += '<div class="columna">';
      seccion2div += '                                <img src="' + albumArray[i].cover + '" alt="' + albumArray[i].title + '">';
      seccion2div += '                                <a href="albumDetail.html?id=' + albumArray[i].id + '"' + ' class="t"> ' + albumArray[i].title + '</a>';
      seccion2div += '                        </div>';

    }
    albuum.innerHTML = seccion2div;
  })
  .catch(function(error){
    return console.log(error);
  })