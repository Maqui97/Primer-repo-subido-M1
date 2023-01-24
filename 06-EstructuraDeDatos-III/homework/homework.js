'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
this.value = value;
this.left = null;
this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
   if(value < this.value){
      if(this.left){
         this.left.insert(value)
      }else{
         this.left = new BinarySearchTree(value)
      return value
      }
   }else{
      if(this.right){
         this.right.insert(value)
      }
      else{
         this.right = new BinarySearchTree(value)
      return value
      }
   }
}

BinarySearchTree.prototype.size = function(){
   let contador = 1;
   if(this.left){
      contador += this.left.size()
   }
   if(this.right){
      contador += this.right.size()
   }
   return contador;
}


BinarySearchTree.prototype.contains = function(value){
   if(value === this.value){
       return true
   }
   else if(value < this.value){
      if(this.left){
      return this.left.contains(value)
      }
      return false
      }
      else if (value > this.value){
         if(this.right){
      return this.right.contains(value)
         }
         return false
      }
      }




BinarySearchTree.prototype.depthFirstForEach = function(cb, type){
   switch(type){
      case "in order":
         if(this.left.value){
         
         }else if(this.value){
            console.log(this.value)
         }else(this.right.value){
            console.log(this.right.value)
         }
         break;

      case "post-order":
            if(this.left.value){
               console.log(this.left.value)
            }else if(this.right.value){
               console.log(this.right.value)
            }else(this.value){
               console.log(this.value)
            }
       }
     
      
}






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
