async function obtener_usuarios()
{
    const datos = await fetch("https://jsonplaceholder.typicode.com/users")
    //obtenemos un arreglo de objetos
    const usuarios = await datos.json()
    const filas = []
    usuarios.forEach( (element,index) => {
     //console.log(element.email)   
     const fila = `
        <tr>
            <td>${index +1}</td>
            <td>${element.username}</td>
            <td>${element.email}}</td>
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