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
    document.getElementById('result').innerHTML = x*57.2957795;
    document.getElementById('unit').innerHTML = "";
}
function radianes(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x*0.01745329;
    document.getElementById('unit').innerHTML = "";
}
function fahrenheit(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x*33.8;
    document.getElementById('unit').innerHTML = "F";
}
function celcius(){
    var x =parseFloat(document.getElementById('value1').value);
    document.getElementById('result').innerHTML = x*(-17.2222);
    document.getElementById('unit').innerHTML = "°C";
}
