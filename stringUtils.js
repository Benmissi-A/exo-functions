const reverseStr = (string) => {
  let str = string.split('').reverse().join('')
  return str
}


 const isPalindrome = (palindrome) => {
   if(reverseStr(palindrome)===palindrome){
     return true
   }else{
     return false
   }

}

console.log(reverseStr('palindrome'))
console.log(isPalindrome('ressasser'))