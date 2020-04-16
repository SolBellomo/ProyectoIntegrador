var misDatos = {
    nombre: "Sol",
    Apellido: "Bellomo Castaños",
    Edad: 18,
    DNI: 43598833,
    casa: "hola",

    saludar: function () {
        return "Hola me llamo " + this.nombre + this.Apellido + " y tengo " + this.Edad + " años y mi DNI es " + this.DNI
    }
}
console.log (misDatos.saludar())