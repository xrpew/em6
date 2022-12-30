function makeid(length) {
    var result           = '';
    var characters       = 'qwertyuiQWERTSDVBHHDFGGHJHJN1234567  89opasdfghjklñzxcvbnm,.  -/*+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(makeid(21));
