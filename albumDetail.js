let queryString1 = location.search; 
let queryStringObj = new URLSearchParams(queryString1);

let id = queryStringObj.get('id');

console.log(id);

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url1 = proxy + 'https://api.deezer.com/album/' + id

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

})
.catch(function(error){
    console.log(error);
})







