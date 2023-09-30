const empleados = {
    nombre: 'Juan' ,
    apellido: 'Perez' ,
    dni: 14333250 ,
    correos:{
        gmail:'jp@gmail.com'
        outlook: 'jp@outlook.com'
    }
}

//Forma 1 de mostrar los datos
const nombre = empleados.nombre
//const gmail = empleados.correos.gmail
//const outlook = empleados.correos.outlook


// Forma 2 - Destructuring Object
    //en primer lugar se acceden las propiedades gmail y outlook, posteriormente 
    //se inicializan las constantes utilizando el mismo nombre que las propiedades.
    // y por ultimo se asignan los datos a las constantes mencionadas

const {gmail, outlook } = empleados.correos

const {apellido } = empleados.apellido

document.write(gmail)
