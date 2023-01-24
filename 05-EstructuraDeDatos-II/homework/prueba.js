

function HashTable() {
    this.bucket = [];
    this.numbuckets = 35;
  }
  
  HashTable.prototype.hash = function(value){
    var hash = 0;
    for(let i = 0; i < value.length; i++){
      console.log(value[i])
      hash = hash + value.charCodeAt(i)
    }

    this.bucket.push(hash % this.numbuckets)
    return hash % this.numbuckets
 }
  
  let newTable = new HashTable();
  newTable.hash('Maqui')
  console.log(newTable)
  console.log(newTable.bucket)
 

  HashTable.prototype.set = function(value, key){
    var hash = key;
    for(let i = 0; i < value.length; i++){
      console.log(value[i])
    }

    this.bucket.push(key)
  }

  var newTable2 = new HashTable()

  newTable2.set('Ariel', '12')
console.log(newTable2)

