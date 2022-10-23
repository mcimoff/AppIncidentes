const usuarios = require('../data/users')


async function getUsuarios(){
    return usuarios.getUsuarios();
}

async function getUsuario(id){
    return usuarios.getUsuario(id);
}

module.exports = {getUsuarios,getUsuario}