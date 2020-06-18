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
    cancion.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1" width="220" height="220"></iframe>'


    let interprete = document.querySelector('.interprete');
    interprete.innerHTML += datos.artist.name;

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


//CANCIONES FAV

let recuperoDelStoragee = localStorage.getItem('favoritos'); //Recuperar datos del storage

if(recuperoDelStoragee == null){
    favoritos = [];
} else {
    favoritos = JSON.parse(recuperoDelStoragee);
}

//Me fijo que no este en la lista y cambio el texto del botón
if(favoritos.includes(idTrack)){
    document.querySelector('.agregar2').innerHTML = "Quitar de la Playlist";   
}

//Agregar un track 

let agregar2 = document.querySelector('.agregar2');

agregar2.addEventListener('click', function(error){
    //detener el a 
    error.preventDefault();

    if(favoritos.includes(idTrack)){
        //Si el track esta, tenemos que quitarlo. 
        let indiceEnElArray = favoritos.indexOf(idTrack);
        favoritos.splice(indiceEnElArray, 1);
        document.querySelector('.agregar2').innerHTML = "Agregar a la Playlist";
        console.log(favoritos);
        
    } else {
        //Agrego el id del track a la playlist
        favoritos.push(idTrack);
        document.querySelector('.agregar2').innerHTML = "Quitar de la Playlist"
    }

    //Guardar lista en el Local Storage
    let favoritosParaStorage = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosParaStorage);
    console.log(localStorage);
    
})
