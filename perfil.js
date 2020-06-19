
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let email1 = datos.get('email')
let pw1 = datos.get('password')
let user = datos.get('user')


localStorage.setItem('userName', email1);
localStorage.setItem('userPw', pw1);
localStorage.setItem('user', user);



let recuperoMail = localStorage.getItem('userName');
let recuperoPw = localStorage.getItem('userPw');
let recuperoUser= localStorage.getItem('user');


let iniciar = document.querySelector('#boton'); 

if(recuperoMail == null){
    let login = document.querySelector('.login');
    login.innerHTML = 'Log In'; 
} else {
    let login = document.querySelector('.login');
    login.innerHTML = recuperoMail;
}
if(recuperoUser == null){
    let user2 = document.querySelector('.user2');
    user2.innerHTML += ''; 
} else {
    let user2 = document.querySelector('.user2');
    user2.innerHTML = recuperoUser;
}
if(recuperoUser == null){
    let user3 = document.querySelector('.user3');
    user3.innerHTML += ''; 
} else {
    let user3 = document.querySelector('.user3');
    user3.innerHTML = recuperoUser;
}
var login = document.querySelector('.login')
if(login = null){
    login.innerHTML = 'Log In'
}









    


