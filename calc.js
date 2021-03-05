const add= (nb1,nb2)=>{
  return nb1 + nb2
}
console.log(add(1,2))

const sub= (nb1,nb2)=>{
  return nb1 - nb2
}
console.log(sub(1,2))

const mul= (nb1,nb2)=>{
  return nb1 * nb2
}
console.log(mul(1,2))

const div= (nb1,nb2)=>{
  return nb1 / nb2
}
console.log(div(1,2))

const calc= (nb1,nb2,operator)=>{
  switch(operator){
    case '+' :
      return nb1+nb2
    case '-' :
      return nb1-nb2
    case '*' :
      return nb1*nb2
    case '/' :
      return nb1/nb2  
    default:
      return 'err'
  }

}
console.log(calc(1,2,'+'))