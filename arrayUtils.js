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
 
 const sortAscend = (array) => {
  array.sort((a, b) => a - b)
  return array
}

sortAscend([99, 100, 101, 1])

 // le programme ne marhe pas encore

/*  const sortAscend = (array) => {
  let nb=0
  let x=0
  let tab = [...array]

  let tab2 = []
  for(let j=0 ; j < array.length ; j++){
    for(let i = 0 ; i < array.length ; i++ ){
      if(tab[i]>=nb){
        nb = tab[i]
        x = i
      }else if(tab[i]===0){
        nb=0
      }
      console.log(i)
    }
    tab2.push(nb)
    tab.splice(x,1)
  }
} 
 */