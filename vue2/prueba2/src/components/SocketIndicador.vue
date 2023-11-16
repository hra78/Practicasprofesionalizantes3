<template>
<div>
<h4>Recibiendo datos</h4>

</div>
</template>

<script>
/* eslint-disable */
import io from 'socket.io-client'
export default {
    name:'SocketIndicador',
    data() {
        return{

        }
    },
    methods: {

        capturar_random()
        {
            //tenemos que conectarnos y/o vincular nuestro cliente con el servidor
            const socket = io("http://localhost:3000")

            socket.on('dato-socket', (valor) => {
                console.log(valor)
            })
        }
    },

    mounted()
    {
        this.capturar_random()
    } 
}
</script>