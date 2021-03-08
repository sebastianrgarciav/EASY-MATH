function metros(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x*1000;
    document.getElementById('unit').innerHTML = "m";
}
function kilometros(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x/1000;
    document.getElementById('unit').innerHTML = "Km";
}
function gramos(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x*1000;
    document.getElementById('unit').innerHTML = "g";
}
function kilogramos(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x/1000;
    document.getElementById('unit').innerHTML = "Kg";
}
function sexagesimales(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = (x*(180/Math.PI)).toFixed(3);
    document.getElementById('unit').innerHTML = "";
}
function radianes(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = (x*(Math.PI/180)).toFixed(3);
    document.getElementById('unit').innerHTML = "";
}
function fahrenheit(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = ((1.8*x)+32).toFixed(3);
    document.getElementById('unit').innerHTML = "F";
}
function celcius(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = ((5/9)*(x-32)).toFixed(3);
    document.getElementById('unit').innerHTML = "°C";
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
        if(meses >= 99999){
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
        if(meses >= 99999){
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
        var meses = ((x*(1+y/100))**(z/12)).toFixed(2);
        document.getElementById('result').innerHTML = meses;
        if(meses >= 99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }

    }
    else{
        var year = ((x*(1+y/100))**z).toFixed(2);
        document.getElementById('result').innerHTML = year;
        if(year >= 99999){
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
        if(meses >= 99999){
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
        if(year >= 99999){
            document.getElementById('result').style.fontSize="21px";
            document.getElementById('unit').style.fontSize="21px";
        }
        else{
            document.getElementById('result').style.fontSize="32px";
            document.getElementById('unit').style.fontSize="32px";
        }
    }
}