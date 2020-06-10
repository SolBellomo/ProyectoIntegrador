let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);

let id1 = queryStringObj.get('id');



let proxy1 = 'https://cors-anywhere.herokuapp.com/'
let url1 = proxy1 + 'https://api.deezer.com/album/' + id1 

console.log(url1)

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














