var express = require('express');
var router = express.Router();
var controller = require('../controllers/incidentes')


router.get('/', async(req, res) => {
  res.json(await controller.getIncidentes());
});

router.delete('/borrarIncidente/:id', async(req,res) =>{
    const incidente = await controller.borrarIncidente(req.params.id);
    res.json(incidente);
})

router-this.delete('/borrarIncidentes', async(req,res) =>{
  const incidentes = await controller.borrarIncidentes();
  res.json(incidentes)
})

router.get('/:id', async(req,res) =>{
  const incidente = await controller.getIncidente(req.params.id);
  res.json(reserva);
})

module.exports = router;