let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/genre'

fetch(url)
    .then(function(response){
        return response.json();
    }
    .then(function(datos){
        console.log(datos);
    
        let artists = document.querySelector('artistass');
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

    let artists = document.querySelector('topp5');
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
    
        let artists = document.querySelector('favoritoss');
        let resultados = datos.data;

        resultados.forEach(function(artist){
            artistass.innerHTML += '<li>' + '<a href="playlists.html?id=' + artist.id + '">' + artist.name  + '</a></li>s'
        })
    })
    .catch(function(error){
        console.log(error)
    })

