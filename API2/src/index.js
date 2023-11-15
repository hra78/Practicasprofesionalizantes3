const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const socketio = require('socket.io')

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

const servidor = server.listen(server.get('port'), ()=> {
    console.log('La conexión fue exitosa!')
});

//le pasamos el servidor a soketio, para habilitar el canal websocket
const io = socketio(servidor)

//establecemos la apertura del canal, para emitir posteriormente lnpmos datos
io.on('connection', (socket) => {
    //socket.emit('dato-socket',10) //este disparo se realiza una sola vez cuando el cliente desee vincularse al servidor
    setInterval(()=>{
        socket.emit('dato-socket', Math, random())
    }, 1000)
    socket.on('respuesta', (valor) => {
        console.log(valor)
    });
})