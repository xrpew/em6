//flat 
const array = [1,2,3,1,[1,2,[1,2],1,1,1],2]
console.log(array.flat(3))

//flatMap
const array2 = [1,2,3,4,5,6]
console.log(array2.flatMap(v=>[v , v*2]))