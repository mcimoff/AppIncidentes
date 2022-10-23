var express = require('express');
var router = express.Router();
const controller = require('../controllers/users')

/* GET users listing. */
router.getUsuarios('/', async(req, res) => {
  res.json(await controller.getUsuarios());
});


router.getUsuario('/:id', async(req,res) =>{
  const usuario = await controller.getUsuario(req.params.id);
  res.json(usuario)
})




module.exports = router;
