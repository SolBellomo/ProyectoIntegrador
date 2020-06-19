//Playlist

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

console.log(recuperoStorage);
console.log(playlist);


//Aca tengo un array de playlist, de ids

playlist.forEach(function(idTrack){
    buscarYMostrarTrack(idTrack);
});


function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
    .then(function(response){
        return response.json();
        
    })
    .then(function(track){
        console.log(track);
        let canciones = document.querySelector('.songs')
       
        canciones.innerHTML += '<a href="trackDetail.html?id=' + track.id + '" class="laCancion" style="height:80px"> <div><img src="'+ track.album.cover_medium +'" alt="" class="prueba"></div><div class="nameAlbum"><p style="margin-top:11px">'+ track.artist.name +'</p><p style="position: relative; top: -10px;">'+ track.title +'</p></div> <div class="iconosInteractivos"></div></a>'
      
    })
    .catch(function(error){
        console.log(error);
        
    })
}