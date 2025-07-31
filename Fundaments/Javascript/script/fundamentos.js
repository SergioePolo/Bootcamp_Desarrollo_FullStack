//comentario en linea
/*Comentario en bloque*/

//-----------------------VARIABLES-------------------------------
/* let (comando universal de variables) + nombre de variable = valor de la variable 
        Para variables de texto se pueden crear con comillas dobles ("") o simples ('') - Se debe mantener el mismo para la apertura y cierre del valor
        Para variables númericas se crean sin comillas, pueden ser enteras o decimales
    const (comando universial de las constantes) + nombre de la cosntantes = valor de la constante
        Se recomienda que el nombre de la contante sea en mayuscular por buenas prácticas de programación 
    Los números decimales sean variables o constantes, el separador decimal siempre es un "."
    */
let nombre =  "Doe";
const PI = 3.14;

//-----------------------TIPOS DE DATOS---------------------------
/**
    DATOS PRIMITIVOS
        * NÚMERICOS - 3, 4.5, 30900000
        * TEXTOS/STRING - LETRA, PALABRA, PARRÁFO,FRÁSE
        * BOOLEANOS - VERDADERO/FALSO
        * NULL/UNDEFINED - Valores vacios o que no estan definidos su valor
    
    DATOS NO PRIMITIVOS
        * ARRAYS - Colecciones de datos
        * OBJETOS - Programación orientada a objetos
*/
//Primitivos

//numéricos
const VAR1 = 1;
let var2 = 2.1;

//string
let texto1 = "texto1";
let texto2 = 'texto2';
const TEXTO3 = "25.3";
const TEXTO4 = 'Desde palabras largas, hasta parráfos enteros';

//Boolean

let isBool1 = true;
let isBool2 = false;
const isBOOL3 = true;
const isBOOL4 = false;

//Undefined/Null

let undefined1 = undefined;
const UNDEFINED2 = undefined;
let null1 = null;
const Null2 = null;

//No primivitos

//Array
let array1 = [1,2,3.15,10000000000000];
const ARRAY2 = ["texto1", "texto2", "texto3"];

//Objects
let object1 = {
    key1:"value",
    key2:2,
    key3:"value"
};
const OBJECT2 = {
    key1:'value',
    key2: 5,
    key3:'value'
};

//Funciones
function sumar (){
    return numero1 + numero2
}

function texto (){
    return texto
}