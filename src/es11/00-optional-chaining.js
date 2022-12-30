const users = {
    xrpew:{
        country:'JPN'
    },
    gaby:{
        country:'VE'
    }
}
console.log(users.xrpew)
console.log(users?.xrpew?.country || 'No existe esa información en la base de datos')
