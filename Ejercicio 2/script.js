
function calcular() {
    // recuperar los valores de la página
    var ope1 = document.getElementById('op1').value;
    var ope2 = document.getElementById('op2').value;
    let suma;
    // sumarlos
    suma = parseFloat(ope1)+parseFloat(ope2);  

    // agregarlos en la página en el lugar adecuado
   
    document.getElementById("resultado").innerHTML = suma;    

}


ejercicio funcionanado

index.html

<html>
    <head>
        <title>Simple JavaScript</title>
        <link rel="stylesheet" href="estilo.css">
        
    </head>
    
    <body>
        <h3>Mini Calculadora</h3>
        <div class="calculadora">
            <input type="text" id="n11" placeholder="n1">
            <select id="op">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" id="n22" placeholder="n2">
            
            
            <button id="calcular">Calcular</button>
        
           
            <div id="resultado" class="resultado">
                
            </div>   
        </div>
        
        
<script src="script.js"></script>

script.js

 document.querySelector('#calcular').addEventListener('click', () =>{
        const n1 = parseInt(document.querySelector('#n11').value);
        const n2 = parseInt(document.querySelector('#n22').value);
        const op2 = document.querySelector('#op').value;
        let r;
        if(op2 == '+'){
            r = n1 + n2;
        }else if( op2 == '-'){
            r = n1 - n2;
        }else if(op2 == '*'){
            r = n1 * n2;
        }else if(op2 == '/'){
            r = n1 / n2;
        }
           // agregarlos en la página en el lugar adecuado
   
        document.getElementById("resultado").innerHTML = r;    

    });