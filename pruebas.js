const jwt = require('jsonwebtoken')
var data = { id: 1 }
var token = jwt.sign(data, 'password')

console.log(token)
var decoded = jwt.verify(token, 'privatePassword')
console.log(decoded)
