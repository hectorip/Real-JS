// Acá va el JS

function greet(who){
    console.log(who);
}

// Podemos aignarle propiedades a la función, lo cuál demuestra que es un objeto.

greet.hello = "Hola";

console.log(greet.hello); // "Hola"


// funciones invocadas inmediatamente

(function(){
    console.log("Esta función se declara y ejecuta inmediatamente.")
})();

