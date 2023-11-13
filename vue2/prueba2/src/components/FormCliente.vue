<template>
    <div class="row">
        <div class="col-lg-4">
            <h3>Probando componente</h3>
            <div class="mb-3">
                 <label class="form-label">Nombre</label>
                 <input v-model="nombre" class="form-control" type="text">
            </div>
              <div>
             <button @click="mostrar()" class="btn btn-success">Aceptar</button>
             </div>
        </div>
           

             <div class="col-lg-8">
                <h4>{{titulo}}</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Correo Electronico</th>
                            <th>Website</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(u, index) of list_usuarios" v-bind:key="index">
                            <td>{{index}}</td>
                            <td>{{u.name}}</td>
                            <td>{{u.username}}</td>
                            <td>{{u.email}}</td>
                            <td>{{u.website}}</td>
                        </tr>
                    </tbody>
                </table>
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
        let list_usuarios = ref([])
        let titulo = ref('Lista de usuarios')
        //sector de funciones
        function mostrar(){
            //alert(nombre.value)
        }
        function mostrar_mensaje(){
            //alert(mensaje.value)
        }

        async function consumir_api(){
            const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
            list_usuarios.value = await usuarios.json()
        }

        return{
            nombre,
            mostrar,
            mensaje,
            mostrar_mensaje,
            consumir_api,
            list_usuarios,
            titulo
        }
    },
    created(){
        this.mostrar_mensaje()
        this.consumir_api()
    }
}
</script>