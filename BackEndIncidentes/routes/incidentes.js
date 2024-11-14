var express = require('express');
var router = express.Router();
var controller = require('../controllers/incidentes')
const bodyParser = require('body-parser');
const data = require('../data/incidentes');

// Clave de la API, asegúrate de usar variables de entorno para almacenarla
const API_KEY = process.env.API_KEY || 'TU_CLAVE_SECRETA';

// Middleware para validar la API Key
function checkApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey && apiKey === API_KEY) {
        next(); // Si la clave coincide, continúa con la solicitud
    } else {
        res.status(403).json({ error: 'Acceso denegado: clave API no válida.' });
    }
}

router.get('/',  checkApiKey, async(req, res) => {
  res.json(await controller.getIncidentes());
});

router.delete('/borrarIncidente/:id', checkApiKey,async(req,res) =>{
    const incidente = await data.borrarIncidente(req.params.id);
    res.json(incidente);
})

router.get('/incidenteXID/:id', checkApiKey,async(req,res) =>{
  const incidente = await data.getIncidenteID(parseInt(req.params.id));
  res.json(incidente);
})

router.post('/nuevoIncidente',checkApiKey, async (req, res) => {
  const incidente = req.body;
  const result = await data.addIncidente(incidente);
  res.json(result);
});

router.get('/obtenerultimoid',checkApiKey, async(req,res) =>{
  res.json(await data.obtenerultimoid());
})

router.get('/incidenteXArea/:area',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidenteXArea(req.params.area);
  res.json(incidente);
})

router.get('/incidenteXUsuarioid/:id',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidenteUsuarioID(req.params.id);
  console.log(req.headers['x-api-key']);
  

  res.json(incidente);
})

router.get('/incidentesPendientes/:id',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentePendienteID(req.params.id);

  res.json(incidente);
})

router.get('/incidenteAbierto/:id',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentesAbiertos(req.params.id);

  res.json(incidente);
})

router.get('/incidenteAbiertoArea/:areaResolutora',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentesAbiertosArea(req.params.areaResolutora);
 console.log(req.params.areaResolutora);
 
  res.json(incidente);
})

router.get('/incidenteAbierto',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentesAbiertos();

  res.json(incidente);
})

router.get('/incidenteResuelto/:areaResolutora',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentesResueltos(req.params.areaResolutora);
  res.json(incidente);
})

router.get('/incidenteSinAsignar/:areaResolutora',checkApiKey, async(req,res) =>{
  const incidente = await data.getIncidentesSinAsignar(req.params.areaResolutora);
  res.json(incidente);
})

router.get('/incidenteXAreaResolutora/:areaResolutora',checkApiKey, async(req,res) =>{
  console.log(req.params.areaResolutora);
  const incidente = await data.getIncidenteXAreaResolutor(req.params.areaResolutora);
  res.json(incidente);
})

router.put('/incidenteAsignado',checkApiKey, async (req, res) => {
  const incidente = req.body;
  const result = await data.incidenteConResolutor(incidente);
  res.json(result);
});

router.patch('/resolverIncidente/:id',checkApiKey, async (req, res) => {
  const id =  req.params.id.trim();
  const result = await data.resolverIncidente(id);
  res.json(result);
});

module.exports = router;