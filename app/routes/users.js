const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// crear un nuevo usuario y no debe ser autenticada
router.post('', (req, res) => {
  usersController.create(req, res)
})

router.post('/login', (req, res) => {})

// mostrará la lista de todos los usuarios
// este endpoing deberá ser autenticado
router.get('', (req, res) => {})

module.exports = router
