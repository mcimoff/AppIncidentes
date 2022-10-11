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

router.get('/titulos', async(req, res) => {
  res.json(await controller.getTitulos());
});

module.exports = router;