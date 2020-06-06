let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/track/" + idTrack

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let titulo = document.querySelector('.audiios');
        titulo.innerHTML += '<h2>' + datos.title + '</h2>';
        
        let artista = document.querySelector('.artista');
        artista.innerHTML += artista.artist;

        //Player
        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'

    })
    .catch(function (error) {
        console.log(error);

    })    


