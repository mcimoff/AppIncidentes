const incidentes = require('../data/incidentes');


async function getIncidentes(id){
    return incidentes.getIncidentes(id);
}

async function borrarIncidente(id){
    return incidentes.borrarIncidente(id);
}

async function getIncidenteID(id){
    return incidentes.getIncidenteID(id);
}

module.exports = {getIncidentes, borrarIncidente,getIncidenteID};