
function calcular() {
    // recuperar los valores de la página
    var ope1 = document.getElementById('op1').value;
    var ope2 = document.getElementById('op2').value;
    let r;
    var ope = document.querySelector('#op').value;
    if(ope == '+'){
        r = parseFloat(ope1)+parseFloat(ope2);
    }else if( ope == '-'){
        r = parseFloat(ope1)-parseFloat(ope2);
    }else if(ope == '*'){
        r = parseFloat(ope1)*parseFloat(ope2);
    }else if(ope == '/'){
        r = parseFloat(ope1)/parseFloat(ope2);
    }
    // agregarlos en la página en el lugar adecuado
   
    document.getElementById("resultado").innerHTML = r;    

}


