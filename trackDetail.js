//Obetener datos de un track
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/track/' + idTrack

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(datos){
    console.log(datos);
    let titulo = document.querySelector('.tituloTrack');
    titulo.innerHTML += datos.title;

    let cancion = document.querySelector('.song');
    cancion.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1" width="300px" height="300px"></iframe>'


    let interprete = document.querySelector('.interprete');
    interprete.innerHTML += '<a href="artistsDetail.html?id=' + datos.artist.id + '"><p style="color: #777;">' + datos.artist.name + '</p></a>';

    let album = document.querySelector('.album');
    album.innerHTML += datos.album.title;
})
.catch(function(error){
    console.log(error);
    
})

//AGREGAR A PLAYLIST
let recuperoDelStorage = localStorage.getItem('playlist'); //Recuperar datos del storage

if(recuperoDelStorage == null){
    playlist = [];
} else {
    playlist = JSON.parse(recuperoDelStorage);
}

//Me fijo que no este en la lista y cambio el texto del botón
if(playlist.includes(idTrack)){
    document.querySelector('.agregar').innerHTML = "Quitar de la Playlist";   
}

//Agregar un track 

let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(error){
    //detener el a 
    error.preventDefault();

    if(playlist.includes(idTrack)){
        //Si el track esta, tenemos que quitarlo. 
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a la Playlist";
        console.log(playlist);
        
    } else {
        //Agrego el id del track a la playlist
        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la Playlist"
    }

    //Guardar lista en el Local Storage
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
    console.log(localStorage);
    
})

