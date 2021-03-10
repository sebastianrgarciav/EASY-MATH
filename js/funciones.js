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
    document.getElementById('unit1').innerHTML = "m = ";
    var valor = ((w-z)/(y-x));
    document.getElementById('result1').innerHTML = valor.toFixed(3);
    if(valor >= 99999|| valor<= -99999){
        document.getElementById('result1').style.fontSize="21px";
        document.getElementById('unit1').style.fontSize="21px";
    }
    else{
        document.getElementById('result1').style.fontSize="32px";
        document.getElementById('unit1').style.fontSize="32px";
    }
}

function triang(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    
    var absol = (Math.abs(x-y+z*0));
    var s = (x+y+z)/2;
    if (absol<z && z<x+y){
        if(x==y && y==z && z==x ){
            document.getElementById('result1').innerHTML = "EQUILATERO";
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = ((s*(s-x)*(s-y)*(s-z))**0.5).toFixed(2);
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = (s*2).toFixed(2);
        }
        else if((x==y && x!=z &&y!=z) || (y==z && y!=x &&z!=x) ||(z==x && z!=y &&x!=y) ){
            document.getElementById('result1').innerHTML = "ISOSCELES";
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = ((s*(s-x)*(s-y)*(s-z))**0.5).toFixed(2);
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = (s*2).toFixed(2);
        }
        else if(x!=y&& y!=z && z!=x ){
            document.getElementById('result1').innerHTML = "ESCALENO";
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = ((s*(s-x)*(s-y)*(s-z))**0.5).toFixed(2);
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = (s*2).toFixed(2);
        }

    }
    else{
        document.getElementById('result1').innerHTML = "NO EXISTE EL TRIANGULO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";

    }
}
function lado(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x;
    if (valor>0){
        document.getElementById('result1').innerHTML = "CUADRADO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = (x*x).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = (x*4).toFixed(2);
        document.getElementById('unit3').innerHTML = "D: ";
        document.getElementById('diagonal').innerHTML = (x*((2)**0.5)).toFixed(2);
    }
    else{
        document.getElementById('result1').innerHTML = "NO EXISTE EL CUADRADO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";
        document.getElementById('unit3').innerHTML = "D: ";
        document.getElementById('diagonal').innerHTML = "NaN";
    }
}
function diagonal(){
    var x =parseFloat(document.getElementById('value1').value);
    var valor = x;
    if (valor>0){
        document.getElementById('result1').innerHTML = "CUADRADO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = ((x*x)/2).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = ((x*4)/(2**0.5)).toFixed(2);
        document.getElementById('unit3').innerHTML = "L: ";
        document.getElementById('diagonal').innerHTML = (((x*x)/2)**0.5).toFixed(2);
    }
    else{
        document.getElementById('result1').innerHTML = "NO EXISTE EL CUADRADO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";
        document.getElementById('unit3').innerHTML = "L: ";
        document.getElementById('diagonal').innerHTML = "NaN";
    }
}
function rec(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    if (x>0 && y>0){
        document.getElementById('result1').innerHTML = "RECTANGULO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = (x*y).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = (x*2+y*2).toFixed(2);
        document.getElementById('unit3').innerHTML = "D: ";
        document.getElementById('diagonal').innerHTML = ((x**2 + y**2)**0.5).toFixed(2);
    }
    else{
        document.getElementById('result1').innerHTML = "RECTANGULO INEXISTENTE" ;
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";
        document.getElementById('unit3').innerHTML = "D: ";
        document.getElementById('diagonal').innerHTML = "NaN";
    }
}
function rombo(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    if (x>0 && y>0){
        document.getElementById('result1').innerHTML = "ROMBO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = ((x*y)/2).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = ((((x/2)**2 + (y/2)**2)**0.5)*4).toFixed(2);
        document.getElementById('unit3').innerHTML = "L: ";
        document.getElementById('diagonal').innerHTML = (((x/2)**2 + (y/2)**2)**0.5).toFixed(2);
    }
    else{
        document.getElementById('result1').innerHTML = "ROMBO INEXISTENTE" ;
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";
        document.getElementById('unit3').innerHTML = "L: ";
        document.getElementById('diagonal').innerHTML = "NaN";
    }
}

function trape(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var z =parseFloat(document.getElementById('value3').value);
    var i = (x-y)/2
    if (x>0 && y>0 && z>0){
        document.getElementById('result1').innerHTML = "TRAPECIO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = (((x+y)*z)/2).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = (x+y+((i**2 + z**2)**0.5)*2).toFixed(2);
        document.getElementById('unit3').innerHTML = "Lado: ";
        document.getElementById('diagonal').innerHTML = (((i**2 + z**2)**0.5)).toFixed(2);
    }
    else{
        document.getElementById('result1').innerHTML = "TRAPECIO INEXISTENTE" ;
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";
        document.getElementById('unit3').innerHTML = "Lado: ";
        document.getElementById('diagonal').innerHTML = "NaN";
    }
}

function penta(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var p= x*5;
    if (x>0 && y>0 && x>y){
        document.getElementById('result1').innerHTML = "PENTAGONO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = ((p*y)/2).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = (p).toFixed(2);
       
    }
    else{
        document.getElementById('result1').innerHTML = "PENTAGONO INEXISTENTE" ;
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";

    }
}
function hexa(){
    var x =parseFloat(document.getElementById('value1').value);
    var y =parseFloat(document.getElementById('value2').value);
    var p= x*6;
    if (x>0 && y>0 && x>y){
        document.getElementById('result1').innerHTML = "HEXAGONO";
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = ((p*y)/2).toFixed(2);
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = (p).toFixed(2);
       
    }
    else{
        document.getElementById('result1').innerHTML = "HEXAGONO INEXISTENTE" ;
        document.getElementById('unit1').innerHTML = "Ar:";
        document.getElementById('area').innerHTML = "NaN";
        document.getElementById('unit2').innerHTML = "P: ";
        document.getElementById('perimetro').innerHTML = "NaN";

    }
}

function circulo(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue =document.getElementById('opcion').value;
    if(selectValue == "decimal"){
        if (x>0){
            document.getElementById('result1').innerHTML = "CIRCULO";
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = (Math.PI*(x**2)).toFixed(2);
            document.getElementById('unit11').innerHTML = "";
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = (2*Math.PI*x).toFixed(2);
            document.getElementById('unit12').innerHTML = "";
           
        }
        else{
            document.getElementById('result1').innerHTML = "CIRCULO INEXISTENTE" ;
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = "NaN";
            document.getElementById('unit11').innerHTML = "";
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = "NaN";
            document.getElementById('unit12').innerHTML = "";
        }

    }
    else{
        if (x>0){
            document.getElementById('result1').innerHTML = "CIRCULO";
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = ((x**2)).toFixed(2);
            document.getElementById('unit11').innerHTML = " π ";
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = (2*x).toFixed(2);
            document.getElementById('unit12').innerHTML = " π ";
           
        }
        else{
            document.getElementById('result1').innerHTML = "CIRCULO INEXISTENTE" ;
            document.getElementById('unit1').innerHTML = "Ar:";
            document.getElementById('area').innerHTML = "NaN";
            document.getElementById('unit11').innerHTML = "";
            document.getElementById('unit2').innerHTML = "P: ";
            document.getElementById('perimetro').innerHTML = "NaN";
            document.getElementById('unit12').innerHTML = "";
        }
    }
}