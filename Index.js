var misDatos = {
    nombre: "Pablo",
    apellido: "Pujol",
    dni: 43908551,
    comidaFavorita: "Pastas",
    edad: 17,
    
    saludar: function() {
       return "Hola, me llamo " + this.nombre + this.apellido + " y tengo " + this.edad + "años"; 
   }

}

console.log(misDatos.saludar())