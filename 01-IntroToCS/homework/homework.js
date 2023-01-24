'use strict';

function BinarioADecimal(num) {
   var resultado = 0
var acumulador = 0
   let newArray = num.split("").reverse();
  for(let i = 0; i < newArray.length; i ++){
   if(newArray[i] != 0){
      resultado = Math.pow(2, i)
      acumulador = acumulador + resultado
   }
  }
  return acumulador;
}


function DecimalABinario(num) {
  var binario = ""
  while(num >0){
   binario = (num%2) + binario;
   num = Math.floor(num/2)
  }
  return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
