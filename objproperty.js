const students = [
    {id: 21, name: "Ajmain"},
    {id: 31, name: "messi"},
    {id: 41, name: "ronaldo"},
    {id: 51, name: "kaka"},
    {id: 61, name: "nahian"},
]


newArray = []
for (let i = 0; i < students.length; i++) {
    const element = students [i];
    const element2 = element.name
    newArray.push(element2)
      
}
console.log(newArray)

const names = students.map (s=>s.name)
const bigger = students.filter (s=>s.id>40)
console.log(names)  
console.log(bigger)