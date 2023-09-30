const alumnos = [
    {
        legajo:234,
        usuario:'dvillegas' ,
        password: '123abc' ,
        telefonos:{
            celular:2994200136,
            fijo:2994775656
        }
    },
    {
        legajo:544,
        usuario:'santiagov' ,
        password: '321cba' ,
        telefonos:{
            celular:2994200136,
            fijo:2994775656
        }
    },
]//aca arriba cargamos dos elementos al arreglo alumnos
//se indico cada elemento separado de coma con los datos pertenecientes a cada elemento entre llaves
alumnos.forEach(element => {//el comando for each de javascrpit recorre el arreglo ejecutando las funciones que indiquemos
    console.log(element.usuario)
    console.log(element.legajo)//muestra en consola otrA propiedad del objeto
    document.write(element.telefonos.fijo)// muestra en pantalla la propiedad del objeto
});

