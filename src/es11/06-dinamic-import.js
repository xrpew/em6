const btn = document.getElementById('btn')

btn.addEventListener('click',async function(){
    const module = await import ('./module.js')
    console.log(module);
    module.hello();
})

const hola = ()=>{
    setTimeout(()=>console.log('hola'),2000)
}

hola()