const conexion = require('./connection');
const DATABASE = 'incidentes';
const USUARIO = 'usuario';
const objectId = require('mongodb').ObjectId;
const { ObjectID } = require('bson');

async function getUsuarios(){
    const conectiondb = await conexion.getConnection()
    const incidentes = await conectiondb
                       .db(DATABASE)
                       .collection(USUARIO)
                       .find()
                       .toArray()
    return incidentes;                   
}

async function addUsuario(usuario) {
    const conectiondb = await conexion.getConnection();
    const result = await conectiondb
        .db(DATABASE)
        .collection(USUARIO)
        .insertOne(usuario);
    return result;
}

async function getUsuarioXCorreo(email) {
    const conectiondb = await conexion.getConnection();
    const usuario = await conectiondb
        .db(DATABASE)
        .collection(USUARIO)
        .findOne({email: email})
    return usuario;
}

async function getUsuarioXArea(area) {
    const conectiondb = await conexion.getConnection();
    const usuario = await conectiondb
        .db(DATABASE)
        .collection(USUARIO)
        .find({"area.area" : area})
        .toArray();
    return usuario;
}

module.exports = {addUsuario,getUsuarioXArea, getUsuarios,getUsuarioXCorreo};