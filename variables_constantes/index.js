
function mostrar(){
    //declaramos una variable
    let numero = 15;
    //se imprime en la consola del navegador
    console.log(numero)
     
}
function evaluar(){
    var dato = 22;
    //condicion 
    if(dato > 10){
        var dato = 77
        console.log(dato)

    }
    console.log(dato)

    


}
function validar(){
  const valor =  prompt('ingrese calificacion')
  //forma1
  if(valor>= 7){
      alert('estas aprobado')
      }else{
      alert('nos vemos en diciembre')
  }
  //expresion ternaria
  (valor >=7) ? alert('estas aprobado') : alert('desaprobado')
}
//invocamos la funcion validar
//validar()

function calcular()
{
    //forma1
    //const dato = document.getElementById("imp_dato1").value
 const dato = document.getElementById("inp_dato1").value

 const resultado = dato * 10;
 alert(resultado)
}