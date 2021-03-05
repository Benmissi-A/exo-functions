   const biggest = (array) => {
  let bgNb=0
  for(elem of array){
    if(elem>bgNb){
      bgNb=elem
    }else{}
  }
  return bgNb

}



 console.log(biggest([99, 100, 101, 1])) 
 
/*  const sortAscend = (array) => {
  array.sort((a, b) => a - b)
  return array
}
 */

// le programme ne marhe pas encore

const sortAscend = (array) => {
  let tab = [...array]
  let x=0
  let tab2 = []
  
  for(let j=0 ; j < array.length ; j++){
    let nb=tab[0]
    for(let i = 0 ; i < array.length ; i++ ){
      if(tab[i]>=nb){
        nb = tab[i]
        x = i
      }else if(tab[i]===0){
        nb=0
      }
    }
    tab.splice(x,1)
    tab2.push(nb)
  }
  return tab2.reverse('')
} 

console.log(sortAscend([99, 100, 101, 1]))


const makeUnique = (array) => {
  let tab = [...array]
  let x=0
  let tab2 = []
  
  for(let j=0 ; j < array.length ; j++){
    let nb=tab[0]
    for(let i = 0 ; i < array.length ; i++ ){
      if(tab[i]>=nb && !tab2.includes(nb)){
        nb = tab[i]
        x = i
      }else if(tab[i]===0){
        nb=0
      }
    }
    tab.splice(x,1)
    tab2.push(nb)
  }
  return tab2.reverse('')
} 

console.log(makeUnique([99, 100,100, 101,100, 1]))