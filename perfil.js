var recuperoMail = localStorage.getItem('userName');

var user = document.getElementById('i') 
 
user.onclick = function(){
    if (recuperoMail == ['']){    
    alert('tenes que iniciar sesion');
} else {
    let perfil = document.querySelector('.icperfil');
    perfil.innerHTML = '<a href="perfil.html"><i class="fas fa-user-circle icons" id="i"></i></a>'
}

}
let email = document.getElementById('email');
    email.innerHTML = recuperoMail;




    







