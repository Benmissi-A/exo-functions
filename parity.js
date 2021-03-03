const isOdd = (number)=>{
  if(number%2 === 0){
    return false
  }else{
    return true
  }
}
const isEven = (number)=>{
  if(!isOdd(number)){
    return true
  }else{
    return false
  }
}
console.log(isOdd(5))
console.log(isEven(5))

