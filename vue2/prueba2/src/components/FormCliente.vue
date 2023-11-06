<template>
    <div class="row">
        <div class="col-lg-4">
            <h3>Probando componente</h3>
            <div class="mb-3">
                 <label class="form-label">Nombre</label>
                 <input v-model="nombre" class="form-control" type="text">
            </div>
        </div>
             <div>
             <button @click="mostrar()" class="btn btn-success">Aceptar</button>
             </div>
    </div>
</template>
<script>
/* eslint-disable */
import { ref } from 'vue'
export default {
    name:'FormCliente',
    setup() {
        //sector de variables
        let nombre = ref('')
        let mensaje = ref('Probando el uso de VUE')
        //sector de funciones
        function mostrar(){
            alert(nombre.value)
        }
        function mostrar_mensaje(){
            alert(mensaje.value)
        }

        return{
            nombre,
            mostrar,
            mensaje,
            mostrar_mensaje
        }
    },
    created(){
        this.mostrar_mensaje()
    }
}
</script>