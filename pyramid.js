const showStars = (nbBase, reverse, string) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += string.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += string.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

let str1 = showStars(5, true,'£')
console.log(str1)

console.log(showStars(10, false, '$'))

const nbBase = 15

let str2 = showStars(nbBase,true,'€')
console.log(str2)