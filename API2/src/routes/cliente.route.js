const express = require('express')

const router = express.Router()

const conexion = require('../database')

router.get('/clientes', async(req,res) => {

    const db = await conexion.obtener_conexion()

    const rows = await db.query('select * from cliente')

    //se entrega como respuesta los clientes en anotacion json
    res.json(rows)

})

module.exports = router