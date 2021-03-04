const mul = (nb1)=>{
  return nb1*2
}

const foreach = (array,func) => {
  let tmpArray=[...array]
  for(let i=0; i < array.length;i++){
    tmpArray[i]= func(array[i])
  }
  return tmpArray
}
console.log(foreach([1,2,3],mul))