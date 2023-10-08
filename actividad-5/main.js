async function obtener_usuarios()
{
    const datos = await fetch("https://dolarapi.com/v1/dolares")
    //obtenemos un arreglo de objetos
    const usuarios = await datos.json()
    const filas = []
    usuarios.forEach( (element,index) => {
     //console.log(element.email)   
     const fila = `
        <tr>
            <td>${index +1}</td>
            <td>${element.nombre}</td>
            <td>${element.compra}</td>
            <td>${element.venta}</td>
        </tr>    
     `
        filas.push(fila)
    })
    //el contenido que se entrega es HTML 
    //el join elimina las comillas y convierte en html
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
//se ejecuta la función
obtener_usuarios()