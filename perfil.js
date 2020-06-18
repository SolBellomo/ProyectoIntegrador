var recuperoMail = localStorage.getItem('userName');

var email = document.getElementById('email')

if(recuperoMail == null){
    email = [];
} else {
    email.innerHTML += recuperoMail;
}





