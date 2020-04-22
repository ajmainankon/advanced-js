// function square (element){
// return element*element
// }


const numbers = [4,5,6,8,6,2,3,6]

const result = numbers.map(x=>x*x)
console.log (result)


const result2 = numbers.filter(x=> x>5)
console.log (result2)


const isThere = numbers.find(x=>x>5)
console.log (isThere)

