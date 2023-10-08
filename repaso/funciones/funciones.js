function recolectar()
{
    const dato1 = document.getElementById("inp_d1").value
    const dato2 = document.getElementById("inp_d2").value
    const tipo_operacion = document.getElementById("slt_operacion").value

    const respuesta = calcular(dato1,dato2,tipo_operacion)

    document.getElementById("h_resultado").textContent = 'Resultado: ' + respuesta
    console.log(respuesta)

}

function calcular(d1,d2,top)
{
    let resultado= null
    if(top == 0){
        resultado = Number(d1) + Number(d2)

    }
    if(top == 1){
        resultado = d1 - d2
        
    }
    if(top == 2){
        resultado = d1 * d2
        
    }
    if(top == 3){
        resultado = d1 / d2
        
    }

    // el retorno de la función calcular
    return resultado
}

function cambiar_label(){
    document.getElementById("lbl_1").textContent = 'probando'
}