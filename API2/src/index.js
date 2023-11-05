const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//accedemos a la funcionalidad de express
const server = express()

//aca dejo configurado la notacion que manejara el flujo de datos
server.use(express.json())

//permitira comunicacion entre el cliente y el servidor
server.use(cors())

server.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes dentro del cliente.route
server.use(require('./routes/cliente.route'))
//ponemos en marcha el servidor especificamos puerto donde correra nuestro server 
server.set('port',process.env.PORT || 3000)

//iniciando el servidor
server.listen(server.get('port'))

console.log('servidor corriendo en puerto: ',server.get('port'))