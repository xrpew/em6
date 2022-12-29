// ----------------ANTES-------

function newUser(name, age, country){
    var name = name || 'Sergio';
    var age = age || 28;
    var country = country || 'VE'
    console.log(name,age,country)
}

newUser()
newUser('Pedro', 23, 'GL')



// ----------------AHORA-------


function newAdmin(name='Sergio', age=27, country='CL'){
    console.log(name,age,country)
}
newAdmin()



function solution(json1={name:'Mr. Michi', food:'Pescado'} , json2={age:12, color:'blanco'}) {

    return ({...json1, ...json2})
}
  
solution({name:'sergio',food:'Pollito'})

