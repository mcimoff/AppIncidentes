const conexion = require('./connection');
const DATABASE = 'incidentes';
const INCIDENTES = 'incidentes';
const objectId = require('mongodb').ObjectId;
const { ObjectID } = require('bson');



async function getIncidentes(){
    const conectiondb = await conexion.getConnection()
    const incidentes = await conectiondb
                       .db(DATABASE)
                       .collection(INCIDENTES)
                       .find()
                       .toArray()
    return incidentes;                   
}

async function getIncidenteID(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({_id: id})
        .toArray();
    return incidente;
}

async function addIncidente(incidente) {
    const conectiondb = await conexion.getConnection();
    const result = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .insertOne(incidente);
    return result;
}

async function borrarIncidente(id){
    const connectiondb = await conexion.getConnection();
    const incidente = await connectiondb
                     .db(DATABASE)
                     .collection(INCIDENTES)
                     .deleteOne({_id : new objectId(id)});
                     
    return incidente; 
}

module.exports = {getIncidentes, borrarIncidente,getIncidenteID, addIncidente};