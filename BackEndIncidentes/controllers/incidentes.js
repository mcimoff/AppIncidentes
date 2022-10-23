const incidentes = require('../data/incidentes');

async function getIncidente(id){
    return incidentes.getIncidente(id);
}

async function getIncidentes(){
    return incidentes.getIncidentes();
}

async function borrarIncidente(id){
    return incidentes.borrarIncidente(id);
}

async function borrarIncidentes(){
    return incidentes.borrarIncidentes();
}

module.exports = {getIncidente,getIncidentes, borrarIncidente,borrarIncidentes};