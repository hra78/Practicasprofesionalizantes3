function calcular()
{
    const vehiculos = document.getElementById("op").value
    console.log(vehiculos)
    if(vehiculos == 0){
        Total_bonificado = 2900000*0.85
    }
    if(vehiculos == 1){
        Total_bonificado = 3350000*0.95
    }
    if(vehiculos == 2){
        Total_bonificado = 3960000*0.90
    }
        document.getElementById("precio_final").textContent = 'Valor Final :$' + Total_bonificado 
}
// ahora control +s y pruebo