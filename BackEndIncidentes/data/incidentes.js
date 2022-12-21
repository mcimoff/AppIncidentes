const conexion = require('./connection');
const DATABASE = 'incidentes';
const INCIDENTES = 'incidentes';
const objectId = require('mongodb').ObjectId;
const { ObjectID } = require('bson');
const strIncidentesAbiertos = "Abierto"
const strIncidentesResueltos = "Resuelto"



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
        .findOne({_id: id})
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

async function getIncidenteXAreaAbiertos(area) {
    const conectiondb = await conexion.getConnection();
      const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": strIncidentesAbiertos, "afectado.area.area" : area})
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

async function getIncidentesAbiertos() {
    const conectiondb = await conexion.getConnection();
    const incidentes = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": strIncidentesAbiertos})
        .toArray();

    return incidentes;
}

async function getIncidentesAbiertosXID(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": strIncidentesAbiertos,"afectado._id" : id})
        .toArray();
        
    return incidente;
}

async function getIncidentesResueltos() {
    const conectiondb = await conexion.getConnection();
    const incidentes = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": "Resuelto"})
        .toArray();

    return incidentes;
}

async function getIncidentesResueltosXID(id) {
    const conectiondb = await conexion.getConnection();
    const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"estadoActual": strIncidentesResueltos,"afectado._id" : id})
        .toArray();
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


async function getIncidenteXAreaResolutor(arearesoltor) {
    const conectiondb = await conexion.getConnection();
      const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"areaResolutora" : arearesoltor})
        .toArray();
    return incidente;
}
//Pensé en poner un boolean para que busqué por abierto o resuelto pero lo dejo así por si hay más estados en el futuro.
async function getIncidenteXAreaResolutorAbiertos(arearesoltor) {
    const conectiondb = await conexion.getConnection();
      const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"areaResolutora" : arearesoltor, "estadoActual": strIncidentesAbiertos})
        .toArray();
    return incidente;
}

async function getIncidenteXAreaResolutorResueltos(arearesoltor) {
    const conectiondb = await conexion.getConnection();
      const incidente = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .find({"areaResolutora" : arearesoltor, "estadoActual": strIncidentesResueltos})
        .toArray();
    return incidente;
}

async function incidenteConResolutor(incidente) {
    const conectiondb = await conexion.getConnection();
    const result = await conectiondb
        .db(DATABASE)
        .collection(INCIDENTES)
        .updateOne({_id: incidente._id},{
            $set: incidente
        })
    return result;
}

async function resolverIncidente(id){
    const clientMongo = await conexion.getConnection();
    const result = await clientMongo
        .db(DATABASE)
        .collection(INCIDENTES)
        .updateOne({_id: parseInt(id)},{
            $set: {estadoActual: 'Resuelto',
                actividades: {
                    fechaYhora: new Date(),
                    tituloActividad: 'Resuelto',
                    comentarios: 'Resuelto'
                },

                fecharesolucion: new Date()}
        })
        return result;
    }

module.exports = {getIncidentes, resolverIncidente,getIncidentesAbiertos,getIncidentesAbiertosXID,getIncidentesSinAsignar, getIncidentesResueltos,getIncidentesResueltosXID, incidenteConResolutor,borrarIncidente,borrarIncidentes,getIncidenteID, addIncidente, obtenerultimoid,getIncidenteXArea, getIncidenteUsuarioID, getIncidenteXAreaResolutor, getIncidenteXAreaResolutorAbiertos, getIncidenteXAreaResolutorResueltos};