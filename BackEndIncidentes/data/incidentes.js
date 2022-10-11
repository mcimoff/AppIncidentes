const conexion = require('./connection');
const DATABASE = 'incidentes';
const INCIDENTES = 'incidentes';
const TITULOS = 'tituloIncidentes'
const objectId = require('mongodb').ObjectId


async function getIncidentes(){
    const conectiondb = await conexion.getConnection()
    const incidentes = await conectiondb
                       .db(DATABASE)
                       .collection(INCIDENTES)
                       .find()
                       .toArray()
    return incidentes;                   
}

async function borrarIncidente(id){
    const connectiondb = await conexion.getConnection();
    const incidente = await connectiondb
                     .db(DATABASE)
                     .collection(INCIDENTES)
                     .deleteOne({_id : new objectId(id)});
                     
    return incidente; 
}

async function getTitulos(){
    const conectiondb = await conexion.getConnection()
    const titulos = await conectiondb
                          .db(DATABASE)
                          .collection(TITULOS)
                          .find()
                          .toArray()
    console.log(titulos)
    return titulos;
}

module.exports = {getIncidentes, borrarIncidente, getTitulos};