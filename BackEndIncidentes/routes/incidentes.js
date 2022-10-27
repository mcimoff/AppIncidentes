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

module.exports = router;