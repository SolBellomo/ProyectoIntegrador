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
            sectionSongs += '<div class="laCancion" style="height:80px">'
            sectionSongs += '<div><img src="'+ resultado1.cover_medium +'" alt="" class="prueba"></div>'
            sectionSongs += '<div class="nameAlbum"><p style="margin-top:11px">'+ resultado1.title +'</p><p>'+ tracksLargo[i].title +'</p></div>'
            sectionSongs += '<div class="iconosInteractivos"></div>'
            sectionSongs += '</div>'
        }
        songs.innerHTML = sectionSongs; 
         ;

                
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


botonCancion.onclick = function(){
    alert('Bienvenido');
}
