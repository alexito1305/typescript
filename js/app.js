var obtenerEdad = function (fechaNac) {
    var fechaActual = new Date();
    var fnac = new Date(fechaNac);
    var edad = fechaActual.getFullYear() - fnac.getFullYear();
    var mes = fechaActual.getMonth() - fnac.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fnac.getDate())) {
        mes--;
    }
    return edad;
};
var miEdad = obtenerEdad('1981-05-13');
var miEdad2 = obtenerEdad('1983-06-04');
var miEdad3 = obtenerEdad('2000-04-06');
var miEdad4 = obtenerEdad('1975-12-12');
var miEdad5 = obtenerEdad('1974-05-31');
console.log("Tu edad es: ".concat(miEdad, " a\u00F1os"));
console.log("Tu edad es: ".concat(miEdad2, " a\u00F1os"));
console.log("Tu edad es: ".concat(miEdad3, " a\u00F1os"));
console.log("Tu edad es: ".concat(miEdad4, " a\u00F1os"));
console.log("Tu edad es: ".concat(miEdad5, " a\u00F1os"));
