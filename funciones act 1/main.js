function cambiar_label(){
    const topl = document.getElementById("slt_operacion").value
    if(topl== 0)   
    {
       document.getElementById("lbl_1").textContent = 'Resistencia' 
       document.getElementById("lbl_2").textContent = 'Intensidad' 
    }
    if(topl == 1)   
    {
       document.getElementById("lbl_1").textContent = 'Tensión' 
       document.getElementById("lbl_2").textContent = 'Intensidad' 
    }
    if(topl == 2)   
    {
       document.getElementById("lbl_1").textContent = 'Tensión'
       document.getElementById("lbl_2").textContent = 'Resistencia' 
    }
}

function recolectar()
{
    const tipo_operacion = document.getElementById("slt_operacion").value //almacenamos en la constante tipo_operacion el valor de la opcion seleccionada en el doc html almacenada en este caso en el indicador stl_operacion
    const dato1 = document.getElementById("inp_d1").value //almacenamos en la constante dato1 el valor ingresado en el input cargado por el usuario.Identficado en el doc html como el indicador inp_d1
    const dato2 = document.getElementById("inp_d2").value
    

    const respuesta = calcular(dato1,dato2,tipo_operacion) //llamoamos a la funcion calcular cargandole como parametro los datos recien almacenados. El resultado de la funcion calcular sera almacenado en la constante respuesta

    document.getElementById("h_resultado").textContent = 'Resultado de la operacion: ' + respuesta
    console.log(respuesta)

}

function calcular(d1,d2,top)
{
    let resultado= null //deja en 0 el valor de la variable resultqado al arrancar
    if(top == 0){ //la opcion en este caso seria tension, en el 1 resistencia y en el 2 intensidad
        resultado = d1 * d2 // a la variable resultado se le asigna el resultado de la operacion dependiendo de la opcion elegida, mutiplicacion o division

    }
    if(top == 1){
        resultado = d1 / d2
        
    }
    if(top == 2){
        resultado = d1 / d2
        
    }
    

    
    return resultado  //da como salida de la funcion el valor de la variable resultado
}
































