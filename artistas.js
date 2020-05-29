let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);

let idArtista = queryStringObj.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + 'https://api.deezer.com/artist/' + idArtista

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(resultado){
        console.log(resultado)
        let profile = resultado.data;
        let avatar = document.querySelector('.avatar');
        avatar.src = resultado.picture_medium; 

        let name = document.querySelector('.name');
        name.innerHTML = resultado.name;

    })
    .catch(function(error){
        console.log(error);
    })
