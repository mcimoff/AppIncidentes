const conexion = require('./connection');
const DATABASE = 'incidentes';
const USUARIOS = 'Usuarios';
const objectId = require('mongodb').ObjectId;


async function getUsuarios(){
    const connectdb = await conexion.getConnection();
    const users = await connectdb
                  .db(DATABASE)
                  .collection(USUARIOS)
                  .find()
                  .toArray();
    return users;
    
}

async function getUsuario(id){
    const connectdb = await conexion.getConnection();

    const users = await connectdb.db(DATABASE)
                                 .collection(USUARIOS)
                                 .find({_id: new objectId})
                                 .toArray();
    return users;
    
}





module.exports = {getUsuarios,getUsuario};