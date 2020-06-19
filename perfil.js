
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let email1 = datos.get('email')
let pw1 = datos.get('password')

localStorage.setItem('userName', email1);
localStorage.setItem('userPw', pw1);

let recuperoMail = localStorage.getItem('userName');
let recuperoPw = localStorage.getItem('userPw');

let iniciar = document.querySelector('#boton'); 

if(recuperoMail == null){
    let login = document.querySelector('.login');
    login.innerHTML = 'Log In'; 
} else {
    let login = document.querySelector('.login');
    login.innerHTML = recuperoMail;
}









    


