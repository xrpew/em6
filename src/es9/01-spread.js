const user = {username:'xerpew', age:28, country:'VE'}

const { username, ...values } = user

console.log(username)
console.log(values)