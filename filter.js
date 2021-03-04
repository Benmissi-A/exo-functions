const filter = (array,compareValue) => {
  for(let i=0; i < array.length;i++){
    if(array[i]===compareValue){  
      return true
    }else{
      return false
    }
  }
}
console.log(filter([1,2,3],9))