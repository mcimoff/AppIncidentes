const {objectId} = require('mongodb');
const conexion = require('./conexion');
const DATABASE = 'incidentes';
const USUARIOS = 'usuarios';
const objectId = require('mongodb').ObjectId;


async function getUsuarios(){
    const connectdb = await connection.getConnection();

    const users = await connectdb.db(DATABASE)
                                 .collection(USUARIOS)
                                 .find()
                                 .toArray();
    return users;
    
}

async function getUsuario(id){
    const connectdb = await connection.getConnection();

    const users = await connectdb.db(DATABASE)
                                 .collection(USUARIOS)
                                 .find({_id: new objectId(id)})
                                 .toArray();
    return users;
    
}





module.exports = {getUsuarios,getUsuario};