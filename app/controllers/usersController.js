const User = require('../models/User')

const create = async (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  try {
    const usuario = await user.save()
    const token = await user.generateAuthToken()
    res
      .header('x-auth', token)
      .status(201)
      .send(usuario)
  } catch (err) {
    res.status(400).send({ error: err })
  }
}

module.exports = {
  create
}
