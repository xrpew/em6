let numMichi = 1;
export function* getId() {
    // Tu código aquí 👈
    yield "Michi #" + numMichi++;
    while (!false) {
    }
  }


const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
