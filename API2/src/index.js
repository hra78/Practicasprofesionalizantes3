const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

//server.set('port',process.env.PORT || 3000)

//ponemos en marcha el servidor
//server.listen(server.get('port'))

console.log('servidor corriendo en puerto: ',server.get('port'))

// especificamos puerto donde correra nuestro server 
server.set('port',3000)

//ponemos en marcha nuestro servidor
// en el puerto 3000
server.listen(server.get('port'))