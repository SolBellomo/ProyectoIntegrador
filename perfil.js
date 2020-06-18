let queryString = location.search;
let datos = new URLSearchParams(queryString);
let email1 = datos.get('email')
let pw1 = datos.get('password')

localStorage.setItem('userName', email1);
localStorage.setItem('userPw', pw1)

var recuperoMail = localStorage.getItem('userName');
var recuperoPw = localStorage.getItem('userPw');

var iniciar = document.getElementById('boton') 
var contra = document.getElementsByClassName('formsContra')
var elmail = document.getElementsByClassName('formsMail')

console.log(elmail);


iniciar.onclick = function(){

    if (elmail.ariaAutoComplete == null || contra.ariaAutoComplete == null){    
    alert('Completa los datos.');
} else {
    let email = document.getElementById('email');
    email.innerHTML = recuperoMail;
}

}






    


