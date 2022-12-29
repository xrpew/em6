// Arrays destructuring

let fruits = ['Apple','Banana']
let [a,b] = fruits

console.log(b, fruits[0])


// Object destructuring

let user = {usermane:'xerpew', age:28}
let { usermane, age } = user

console.log(usermane, user.age, user)

// spread operator

let person = {name:'sergio', age:28};
let country = 'VE';

let data = {id: 1, ...person, country}
console.log(data)

 function sum(num, ...values){
    console.log(values)
    console.log(num)
    console.log(values[2]+num)
 }
 sum(10,5,7,8)
