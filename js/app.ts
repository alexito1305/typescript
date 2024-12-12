const obtenerEdad = (fechaNac: string) =>{
    const fechaActual = new Date();
    const fnac = new Date(fechaNac);

    let edad: number = fechaActual.getFullYear() - fnac.getFullYear();
    let mes: number = fechaActual.getMonth() - fnac.getMonth();

    if(mes < 0 || (mes === 0 && fechaActual.getDate() < fnac.getDate())){
        mes--;
    }
    return edad;
};

const miEdad: number = obtenerEdad('1981-05-13');
const miEdad2: number = obtenerEdad('1983-06-04');
const miEdad3: number = obtenerEdad('2000-04-06');
const miEdad4: number = obtenerEdad('1975-12-12');
const miEdad5: number = obtenerEdad('1974-05-31');

console.log(`Tu edad es: ${miEdad} años`);
console.log(`Tu edad es: ${miEdad2} años`);
console.log(`Tu edad es: ${miEdad3} años`);
console.log(`Tu edad es: ${miEdad4} años`);
console.log(`Tu edad es: ${miEdad5} años`);