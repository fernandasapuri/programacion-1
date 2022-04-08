function calcular_area()
{
    const dato1 = document.getElementById("inp_base1").value
    const dato2 = document.getElementById("inp_base2").value
    const dato3 = document.getElementById("inp_base3").value
    const resultado = parseInt( dato1) +  parseInt( dato2)
    const resul2 = parseInt ( resultado) *parseInt( dato3)
    const result3 = parseInt ( resul2) /  2

    alert(result3)
}

