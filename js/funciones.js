function metros(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x*1000;
    document.getElementById('result').innerHTML = valor.toFixed(2);
    document.getElementById('unit').innerHTML = "m";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function kilometros(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x/1000;
    document.getElementById('result').innerHTML = valor;
    document.getElementById('unit').innerHTML = "Km";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function gramos(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x*1000;
    document.getElementById('result').innerHTML = valor.toFixed(2);
    document.getElementById('unit').innerHTML = "g";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function kilogramos(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x/1000;
    document.getElementById('result').innerHTML = valor.toFixed(2);
    document.getElementById('unit').innerHTML = "Kg";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function sexagesimales(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = (x*(180/Math.PI));
    document.getElementById('result').innerHTML = valor.toFixed(3);
    document.getElementById('unit').innerHTML = "";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function radianes(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = (x*(Math.PI/180));
    document.getElementById('result').innerHTML = valor.toFixed(3);
    document.getElementById('unit').innerHTML = "";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function fahrenheit(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor =  ((1.8*x)+32);
    document.getElementById('result').innerHTML =valor.toFixed(3);
    document.getElementById('unit').innerHTML = "F";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function celcius(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor =((5/9)*(x-32));
    document.getElementById('result').innerHTML =valor.toFixed(3);
    document.getElementById('unit').innerHTML = "°C";
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
}
function inteSimple(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var selectValue =document.getElementById('opcion').value;
    document.getElementById('unit').innerHTML = "Und";
    if(selectValue == "Meses"){
        var meses = (x*(y/100)*(z/12)).toFixed(2);
        document.getElementById('result').innerHTML = meses;
        if(meses >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }
    }
    else{
        year=(x*(y/100)*z).toFixed(2);
        document.getElementById('result').innerHTML = year;
        if(meses >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }

    }
}
function inteCompuesto(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var selectValue =document.getElementById('opcion').value;
    document.getElementById('unit').innerHTML = "Und";
    if(selectValue == "Meses"){
        var meses = (x*((1+y/100)**(z/12))).toFixed(2);
        document.getElementById('result').innerHTML = meses;
        if(meses >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }

    }
    else{
        var year = (x*((1+y/100)**z)).toFixed(2);
        document.getElementById('result').innerHTML = year;
        if(year >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }
    }
}
function inteTasa(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var selectValue =document.getElementById('opcion').value;
    document.getElementById('unit').innerHTML = "%";
    if(selectValue == "Meses"){
        var meses = ((y*100)/(x*(z/12))).toFixed(2);
        document.getElementById('result').innerHTML = meses;
        if(meses >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }

    }
    else{
        var year = ((y*100)/(x*(z))).toFixed(2);
        document.getElementById('result').innerHTML = year;
        if(year >= 99999 || valor<= -99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }
    }
}

function primerG(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    document.getElementById('unit').innerHTML = "X:   ";
    var valor = ((-y)/x).toFixed(2);
    document.getElementById('result').innerHTML = valor;
    if(valor >= 99999 || valor<= -99999){
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else{
        document.getElementById('result').style.fontSize="32px";
        document.getElementById('unit').style.fontSize="32px";
    }
    
}
function segundoG(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    document.getElementById('unit1').innerHTML = "x1:   ";
    var valor =((-y)+((y)**2-(4*x*z))**0.5)/(2*x);
    document.getElementById('result1').innerHTML = valor.toFixed(3);
    document.getElementById('unit2').innerHTML = "x2:   ";
    var valor = ((-y)-((y)**2-(4*x*z))**0.5)/(2*x);
    document.getElementById('result2').innerHTML = valor.toFixed(3);

    if(valor >= 99999|| valor<= -99999){
        document.getElementById('result1').style.fontSize="21px";
        document.getElementById('unit1').style.fontSize="21px";
        document.getElementById('result2').style.fontSize="21px";
        document.getElementById('unit2').style.fontSize="21px";
    }
    else{
        document.getElementById('result1').style.fontSize="32px";
        document.getElementById('unit1').style.fontSize="32px";
        document.getElementById('result2').style.fontSize="32px";
        document.getElementById('unit2').style.fontSize="32px";
    }
}
function dist(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var w =parseFloat(document.getElementById('value4').value);
    document.getElementById('unit1').innerHTML = "D = ";
    var valor =((y-x)**2 + (w-z)**2)**0.5;
    document.getElementById('result1').innerHTML = valor.toFixed(2);
    if(valor >= 99999|| valor<= -99999){
        document.getElementById('result1').style.fontSize="21px";
        document.getElementById('unit1').style.fontSize="21px";
    }
    else{
        document.getElementById('result1').style.fontSize="32px";
        document.getElementById('unit1').style.fontSize="32px";
    }
}
function pend(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var w =parseFloat(document.getElementById('value4').value);
    document.getElementById('unit1').innerHTML = "D = ";
    var valor = ((w-z)/(y-x));
    document.getElementById('result1').innerHTML = valor.toFixed(2);
    if(valor >= 99999|| valor<= -99999){
        document.getElementById('result1').style.fontSize="21px";
        document.getElementById('unit1').style.fontSize="21px";
    }
    else{
        document.getElementById('result1').style.fontSize="32px";
        document.getElementById('unit1').style.fontSize="32px";
    }
}

