const fnAsync = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?   setTimeout(()=>resolve('ASYNC! tercero'), 2233)
            :   reject(new Error('ERROR!!'));
    });
}
const anotherFn = async()=>{
    const something =  await fnAsync();
    console.log(something);
    console.log('Hello cuarto' )
}

console.log('Before primero')
anotherFn()
console.log('After segundo')
