const incidentes = require('../data/incidentes');


async function getIncidentes(){
    return incidentes.getIncidentes();
}

async function borrarIncidente(id){
    return incidentes.borrarIncidente(id);
}

async function getTitulos(){
    return incidentes.getTitulos();
}

module.exports = {getIncidentes, borrarIncidente, getTitulos};