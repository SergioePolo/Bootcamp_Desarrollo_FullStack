/* EJ3: Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano. */
let esColombiano = confirm("¿Eres ciudadano colombiano?");
let edad = prompt ("Cual es su edad");

edad = parseInt(edad);

if(edad >= 18 && esColombiano == true){
    alert("Felicidades puedes votar");
}
else{
    alert("Lo lamento no puedes votar")
}