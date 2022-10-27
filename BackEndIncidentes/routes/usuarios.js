var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const data = require('../data/usuarios');

router.get('/', async(req, res) => {
  res.json(await data.getUsuarios());
});

router.post('/nuevousuario', async (req, res) => {
  const usuario = req.body;
  console.log(usuario);
  const result = await data.addUsuario(usuario);
  res.json(result);
});

router.get('/getusuario/:email', async(req,res) =>{
  console.log(req.params.email);
  const usuario = await data.getUsuarioXCorreo(req.params.email);
  res.json(usuario);
})

module.exports = router;