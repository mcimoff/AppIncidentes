var express = require('express');
var router = express.Router();
var controller = require('../controllers/incidentes')
const bodyParser = require('body-parser');
const data = require('../data/incidentes');
const authUser = require('../middleware/authUser')

router.get('/:id',  async(req, res) => {
  res.json(await controller.getIncidentes(req.params.id));
});

router.delete('/borrarIncidente/:id', async(req,res) =>{
    const incidente = await data.borrarIncidente(req.params.id);
    res.json(incidente);
})

// router.delete('/borrarIncidentes', async(req,res) =>{
//   const incidentes = await controller.borrarIncidentes();
//   res.json(incidentes)
// })

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

router.get('/incidenteXArea/:area', authUser.checkIfAuthenticated, async(req,res) =>{

  const incidente = await data.getIncidenteXArea(req.params.area);
  res.json(incidente);
})

module.exports = router;