 function calcular_area_circ(r)
 {
     
   const resultado =  Math.pow(r,2) * Math.PI
   return resultado



 }
 function mostrar_area()
 {
    const dato1 = document.getElementById("inp_radio").value
    const respuesta = calcular_area_circ(dato1)

  alert(respuesta)
 }