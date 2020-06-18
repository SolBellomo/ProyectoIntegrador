let queryString = location.search;
let datos = new URLSearchParams(queryString);
let email = datos.get('email')

localStorage.setItem('userName', email);



