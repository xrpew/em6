import { hello,  getData } from "./module.js";


hello();


async function solution() {
  return await getData()
    .then(res => res)
    .catch(err=>err)
}

solution()