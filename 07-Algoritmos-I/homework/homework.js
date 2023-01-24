'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

function bubbleSort(array) {
  for(let i = 0; i < array.length; i++){
    if(array[i] < array[i + 1]){
      //está ordenado
  }else{
    array[i + 1] = array[i - 1]
    array[i] = array[i + 1] //está desordenado
    }
  }
    return array
}

//tengo un array desordenado, tengo que ordenarlo de menor a mayor
//voy a comenzar recorriendolo y comparando el primer valor con el siguiente
//el primer valor es más chico que el siguiente valor?
//SI continuo
//NO tengo que intercambiar valores, el número que sigue pasa al lugar de mi número
//mi número pasa al lugar del otro número
//continuo


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
