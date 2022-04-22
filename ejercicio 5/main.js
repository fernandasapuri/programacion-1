function calcular_raices(A,B,C)
{
const parte1 = Math.pow(B,2) - (4 * A * C) 
const parte2 = Math.sqrt(parte1)
const parte3 =(-B + parte2) / (2*A)
const parte4 =(-B - parte2) / (2*A)
return 'raiz +' + parte3 + 'raiz -' + parte4
}
 function mostrar_raices(){
   const parte1  = document.getElementById("imp_dato_a").value
   const parte2 = document.getElementById("imp_dato_b").value
   const parte3 = document.getElementById("imp_dato_c").value

   const respuesta=calcular_raices(parte1,parte2,parte3)
   alert(respuesta)
 
}