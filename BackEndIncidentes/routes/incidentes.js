var express = require('express');
var router = express.Router();
var controller = require('../controllers/incidentes')
const bodyParser = require('body-parser');
const data = require('../data/incidentes');

router.get('/', async(req, res) => {
  res.json(await controller.getIncidentes());
});

router.delete('/borrarIncidente/:id', async(req,res) =>{
    const incidente = await data.borrarIncidente(req.params.id);
    res.json(incidente);
})

router.get('/incidenteXID/:id', async(req,res) =>{
  const incidente = await data.getIncidenteID(parseInt(req.params.id));
  res.json(incidente);
})

router.post('/nuevoIncidente', async (req, res) => {
  const incidente = req.body;
  const result = await data.addIncidente(incidente);
  res.json(result);
});

router.get('/obtenerultimoid', async(req,res) =>{
  res.json(await data.obtenerultimoid());
})

router.get('/incidenteXArea/:area', async(req,res) =>{
  const incidente = await data.getIncidenteXArea(req.params.area);
  res.json(incidente);
})

router.get('/incidenteXUsuarioid/:id', async(req,res) =>{
  const incidente = await data.getIncidenteUsuarioID(req.params.id);

  res.json(incidente);
})

router.get('/incidenteAbierto/:id', async(req,res) =>{
  const incidente = await data.getIncidentesAbiertos(req.params.id);

  res.json(incidente);
})

router.get('/incidenteResuelto/:id', async(req,res) =>{
  const incidente = await data.getIncidentesResueltos(req.params.id);
  res.json(incidente);
})

router.get('/incidenteSinAsignar/:id', async(req,res) =>{
  const incidente = await data.getIncidentesSinAsignar(req.params.id);
  res.json(incidente);
})

router.get('/incidenteXAreaResolutora/:areaResolutora', async(req,res) =>{
  console.log(req.params.areaResolutora);
  const incidente = await data.getIncidenteXAreaResolutor(req.params.areaResolutora);
  res.json(incidente);
})

router.put('/incidenteAsignado', async (req, res) => {
  const incidente = req.body;
  const result = await data.incidenteConResolutor(incidente);
  res.json(result);
});

router.patch('/resolverIncidente/:id', async (req, res) => {
  const id =  req.params.id.trim();
  const result = await data.resolverIncidente(id);
  res.json(result);
});

module.exports = router;