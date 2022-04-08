function calcular_division(dato1,dato2) // es el argumento     esta preparada para recibir 2 datos 
{
    const resultado = dato1 / dato2   //esta funcion la ejecuta calcular_divicion()
     return resultado

}

function mostrar_resultado() //recolecta los datos del input
{ //el ducument lo guardo en una constante.
    const dato1 = document.getElementById("inp_dato1").value //permite encontar el input

    //forma2 
  
  const dato2= document.querySelector("#inp_dato2").value  // se pone # para buscar el id y por clase de pone "."

  //invocamos(ejecutamos) a la funcion, pero ademas le enviamos dos parametros//
  //ademas resibimos una respuesta por parte de la funcion calcular_divicion()
  const respuesta = calcular_division(dato1,dato2)

  alert(respuesta)


}   