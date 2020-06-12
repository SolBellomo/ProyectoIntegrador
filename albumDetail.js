let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);

let id1 = queryStringObj.get('id');



let proxy1 = 'https://cors-anywhere.herokuapp.com/'
let url1 = proxy1 + 'https://api.deezer.com/album/' + id1 



fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){

        console.log(resultado)
        let profile = resultado.data;
        let albumFoto = document.querySelector('.albumFoto');
        albumFoto.src = resultado.cover_medium; 

        let tituloAlbum = document.querySelector('#tituloAlbum');
        tituloAlbum.innerHTML = resultado.title;

        let artista = document.querySelector('#nombreDelArtista');
        artista.innerHTML = resultado.artist.name;

})
.catch(function(error){
    console.log(error);
})

let url2 = proxy1 + 'https://api.deezer.com/album/' + id1 + '/tracks'

fetch(url2)
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
    songs.innerHTML = sectionSongs

    })
    .catch(function(error){
        console.log(error);
    })











