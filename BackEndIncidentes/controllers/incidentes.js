const incidentes = require('../data/incidentes');


async function getIncidentes(){
    return incidentes.getIncidentes();
}

async function borrarIncidente(id){
    return incidentes.borrarIncidente(id);
}

async function getIncidenteID(id){
    return incidentes.getIncidenteID(id);
}

module.exports = {getIncidentes, borrarIncidente,getIncidenteID};