
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let email1 = datos.get('email')
let pw1 = datos.get('password')

localStorage.setItem('userName', email1);
localStorage.setItem('userPw', pw1);

let recuperoMail = localStorage.getItem('userName');
let recuperoPw = localStorage.getItem('userPw');

let iniciar = document.querySelector('#boton'); 

iniciar.onclick = function(){
    let inicio = document.querySelector('.inicio');
    inicio.innerHTML = '<img src="imagenes/.png" alt="Inicio">';
}







    


