// function contador(){
//         var count = 1
//         while(count < 10){
//     console.log(count)
//     count ++;
//         }
//     }


//     contador()


//     console.log('hola')


// var instructor = {
//     nombre: 'Franco',
//     edad: 25,
//  };
 
//  var alumno = {
//     nombre: 'Juan',
//     curso: 'FullStack',
//  };
 
//  function getNombre() {
//    return this.nombre;}

//    let getNombreInstructor = getNombre.bind(instructor);
// let getNombreAlumno = getNombre.bind(alumno);


// var contador = 1
//     function prueba(){
//       console.log(contador++); 
//     }

// // prueba()
// // prueba()
// // prueba()
// // prueba()
// // prueba()

// function counter(){
//     var contador = 1
//       return function(){
//         console.log(contador++); 
//       }
//   }
  
//   var newCounter = counter()

//   newCounter()
//   newCounter()
//   newCounter()

// function nFactorial(n) {
//   var factorial = 1
//   function c(){
//   if(n === 0 || n === 1) return 1
//     var resultado = factorial * n
//     factorial = resultado 
//     console.log(factorial)
//   }
//     return nFactorial
// }

// nFactorial(5)



function nFactorial(n) {
  if(n === 0 || n === 1)return 1
   else if(n < 0) return 0

   return n * nFactorial(n - 1)
}

console.log(nFactorial(5))
console.log(nFactorial(4))