let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);

let id = queryStringObj.get('id');



let proxy1 = 'https://cors-anywhere.herokuapp.com/'
let url = proxy1 + 'https://api.deezer.com/album/' + id



fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){

        console.log(resultado)

        let albumFoto = document.querySelector('.albumFoto');
        albumFoto.src = resultado.cover_medium; 

        let tituloAlbum = document.querySelector('.tituloAlbum');
        tituloAlbum.innerHTML = resultado.title;

        let artista = document.querySelector('.nombreDelArtista');
        artista.innerHTML = resultado.artist.name;

        let fecha = document.querySelector('.fecha');
        fecha.innerHTML = resultado.release_date;

})
.catch(function(error){
    console.log(error);
})




//----

let url1 = proxy1 + 'https://api.deezer.com/album/' + id 


fetch(url1)
    .then(function(response1){
        return response1.json();
    })
    .then(function(resultado1){

        console.log(resultado1)
        let tracksLargo = resultado1.tracks.data;
        let songs = document.querySelector('.Songs')
        let sectionSongs = '';

        for(let i=0; i<tracksLargo.length; i++){

            sectionSongs += '<a href="trackDetail.html?id=' + tracksLargo[i].id + '" class="laCancion" style="height:80px">'
            sectionSongs += '<div><img src="'+ resultado1.cover_medium +'" alt="" class="prueba"></div>'
            sectionSongs += '<div class="nameAlbum"><p style="margin-top:11px">'+ tracksLargo[i].title +'</p><p>'+ resultado1.artist.name +'</p></div>'
            sectionSongs += '<button class="botonPlaylist">AÑADIR A PLAYLIST</button>'
            sectionSongs += '</a>'
        }
        songs.innerHTML = sectionSongs; 
         
    })

    .catch(function(error){
        console.log(error);
    })





//----






//Plan B
/*let url1 = proxy1 + 'https://api.deezer.com/album/' + id + '/tracks'

fetch(url1)
    .then(function(response1){
        return response1.json();
    })
    .then(function(resultado1){

        console.log(resultado1)
        let cancionesArray = resultado1.data;
        let songs = document.querySelector('.Songs')
        let sectionSongs = '';

        for(let i=0; i<cancionesArray.length; i++){
    
          sectionSongs += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+ cancionesArray[i].id +'&app_id=1" width="100%" height="85px"></iframe>'
           
        }
    songs.innerHTML = sectionSongs; 

    })
    .catch(function(error){
        console.log(error);
    })
*/ 

//EVENTO

var botonCancion = document.getElementsByClassName('laCancion')

console.log(botonCancion);


botonCancion.onmouseover = function(){
    let header = document.querySelector('.header2');
    header.style.display = "none";
    
}
let recuperoDelStorage = localStorage.getItem('reproductor');

if(recuperoDelStorage == null){
    reproductor = [];
} else {
    reproductor = JSON.parse(recuperoDelStorage);
}

//Me fijo que no este en la lista y cambio el texto del botón
if(playlist.includes(id)){
    document.querySelector('.agregar').innerHTML = "Quitar de la Playlist";   
}

//Agregar un track 

let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(e){
    //detener el a 
    e.preventDefault();

    if(playlist.includes(idTrack)){
        //Si el track esta, tenemos que quitarlo. 
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a la pLaylist";
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

