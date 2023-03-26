function getName(){
    return "Erkam Esen"
}

function getMail(){
    return "erkamesen789@gmail.com"
}   


module.exports.name = getName

module.exports.getMail = getMail

module.exports.age = function(){
    return 28
}


/* 
exports.name = getName
exports.getMail = getMail
exports.age = function(){
    return 28
}
*/