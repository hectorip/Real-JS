
function la_funcion(){
    console.log(la_variable); // variable indefinida, con valor 'undefined'
    var la_variable = 0; // pertenece a la función, se le aplica hoisting
    una_variable_global = 0; // pertenece al scope global, mala idea
    //console.log(una_variable_sin_hoisting) // error
    let una_variable_sin_hoisting = 0;
    const UNA_CONSTANTE = 10; // Esta variable no puede cambiar, las mayúsculas son convención
}



