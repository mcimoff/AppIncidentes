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

async function borrarIncidentes(){
    const connectiondb = await conexion.getConnection();
    const incidentes = await connectiondb
                     .db(DATABASE)
                     .collection(INCIDENTES)
                     .deleteMany();
                     
    return incidentes; 
}
async function obtenerultimoid() {
    const conectiondb = await conexion.getConnection()
    const incidente = await conectiondb
                       .db(DATABASE)
                       .collection(INCIDENTES)
                       .find()                       
                       .sort({$natural:-1})
                       .limit(1)
                       .toArray()

    return incidente;      
}

async function getIncidenteXArea(area) {
    const conectiondb = await conexion.getConnection();
      const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"afectado.area.area" : area})
        .toArray();
    return incidente;
}

async function getIncidenteUsuarioID(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"afectado._id" : id})
        .toArray();
        console.log(incidente);
    return incidente;
}

async function getIncidentesAbiertos(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": "Abierto","afectado._id" : id})
        .toArray();
        console.log(incidente);
    return incidente;
}

async function getIncidentesResueltos(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": "Resuelto","afectado._id" : id})
        .toArray();
        console.log(incidente);
    return incidente;
}

async function getIncidentesSinAsignar(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"especialista": {},"afectado._id" : id})
        .toArray();
        console.log(incidente);
    return incidente;
}



module.exports = {getIncidentes,getIncidentesAbiertos,getIncidentesSinAsignar, getIncidentesResueltos, borrarIncidente,borrarIncidentes,getIncidenteID, addIncidente, obtenerultimoid,getIncidenteXArea, getIncidenteUsuarioID};