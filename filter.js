const filter = (array,compareValue) => {
  let tmpArray=[...array]
  for(let i=0; i < array.length;i++){
    if(tmpArray[i]===compareValue){  
      return true
    }else{
      return false
    }
  }

}
console.log(filter([1,2,3],9))