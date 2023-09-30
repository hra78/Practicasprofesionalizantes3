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
}

    ]

alumnos.forEach(Element => {
    console.log(element.usuario)
});

