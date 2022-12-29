function* iterate(array){
    for(let value of array){
        yield value
    } 
}

const it = iterate(['Sergio', 'Pérez', 'Ramón', 'Gabriela'])
console.log(it.next().value)



let numMichi = 1;
export function* getId() {
    // Tu código aquí 👈
    while (!false) {
        yield "Michi #" + numMichi++;
    }
  }


const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)


let num = 234
let letra = num.toString(36)
console.log(letra)