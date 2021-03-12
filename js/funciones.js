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
///////Masa//////////////
function masa(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;
    //Toneladas
    if(selectValue1 == "tonelada" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "T";
        
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x*(10**3));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x*(10**4));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x*(10**6));
        document.getElementById('unit').innerHTML = "g";
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x*(10**8));
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*(10**9));
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "tonelada" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*(10**12));
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    //Kilogramo
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**3));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x*10);
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x*(10**5));
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*(10**6));
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "kilogramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*(10**9));
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    //Hectogramo
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**4));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**1));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="26px";
        document.getElementById('unit').style.fontSize="26px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="26px";
        document.getElementById('unit').style.fontSize="26px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x*(10**2));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="26px";
        document.getElementById('unit').style.fontSize="26px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x*(10**4));
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*(10**5));
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1 == "hectogramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*(10**8));
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    //Gramos
    else if(selectValue1 == "gramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**6));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**3));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x/(10**2));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x*(10**2));
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="25.5px";
        document.getElementById('unit').style.fontSize="25.5px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*(10**3));
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "gramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*(10**6));
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    //Centigramos
    else if(selectValue1 == "centigramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**8));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**5));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x/(10**4));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x/(10**2));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*10);
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "centigramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*10000);
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }

    //Miligramos 
    else if(selectValue1 == "miligramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**9));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**6));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x/(10**5));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x/(10**3));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x/10);
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }

        //Miligramos 
    else if(selectValue1 == "miligramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**9));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**6));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x/(10**5));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x/(10**3));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x/10);
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "miligramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    //Microgramo 
    else if(selectValue1 == "microgramo" &&  selectValue2 == "tonelada"){
        document.getElementById('result').innerHTML = (x/(10**12));
        document.getElementById('unit').innerHTML = "T";
        document.getElementById('result').style.fontSize="21.5px";
        document.getElementById('unit').style.fontSize="21.5px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "kilogramo"){
        document.getElementById('result').innerHTML = (x/(10**9));
        document.getElementById('unit').innerHTML = "Kg";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "hectogramo"){
        document.getElementById('result').innerHTML = (x/(10**8));
        document.getElementById('unit').innerHTML = "Hg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "gramo"){
        document.getElementById('result').innerHTML = (x/(10**6));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "centigramo"){
        document.getElementById('result').innerHTML = (x/10000);
        document.getElementById('unit').innerHTML = "cg";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "miligramo"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "mg";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1 == "microgramo" &&  selectValue2 == "microgramo"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "ug";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    }
}

////////TEMPERATURA/////////////
function temp(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;
    //Celsius
    if(selectValue1 == "celsius" &&  selectValue2 == "celsius"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "°C";
    }
    else if(selectValue1 == "celsius" &&  selectValue2 == "fahrenheit"){
        document.getElementById('result').innerHTML = ((1.8*x)+32).toFixed(2);
        document.getElementById('unit').innerHTML = "F";
    }
    else if(selectValue1 == "celsius" &&  selectValue2 == "kelvin"){
        document.getElementById('result').innerHTML = (x+273.15).toFixed(2);
        document.getElementById('unit').innerHTML = "K";
    }
    //Fahrenheit
    else if(selectValue1 == "fahrenheit" &&  selectValue2 == "celsius"){
        document.getElementById('result').innerHTML = ((5/9)*(x-32)).toFixed(2);
        document.getElementById('unit').innerHTML = "°C";
    }
    else if(selectValue1 == "fahrenheit" &&  selectValue2 == "fahrenheit"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "F";
    }
    else if(selectValue1 == "fahrenheit" &&  selectValue2 == "kelvin"){
        document.getElementById('result').innerHTML = (((5/9)*(x-32))+273.15).toFixed(2);
        document.getElementById('unit').innerHTML = "K";
    }
    //KELVIN
    else if(selectValue1 == "kelvin" &&  selectValue2 == "celsius"){
        document.getElementById('result').innerHTML = (x-273.15);
        document.getElementById('unit').innerHTML = "°C";
    }
    else if(selectValue1 == "kelvin" &&  selectValue2 == "fahrenheit"){
        document.getElementById('result').innerHTML = ((1.8*(x-273.15))+32).toFixed(2);
        document.getElementById('unit').innerHTML = "F";
    }
    else if(selectValue1 == "kelvin" &&  selectValue2 == "kelvin"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "K";
    }

    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    }  
}

///Angulo
function ang(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;
    //sexa
    if(selectValue1 == "sexa" &&  selectValue2 == "sexa"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "°";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "sexa" &&  selectValue2 == "rad"){
        document.getElementById('result').innerHTML = (x*(Math.PI/180));
        document.getElementById('unit').innerHTML = "π";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "sexa" &&  selectValue2 == "cen"){
        document.getElementById('result').innerHTML = (x*(200/180));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    //rad
    else if(selectValue1 == "rad" &&  selectValue2 == "sexa"){
        document.getElementById('result').innerHTML = (x*(180/Math.PI));
        document.getElementById('unit').innerHTML = "°";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "rad" &&  selectValue2 == "rad"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "π";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "rad" &&  selectValue2 == "cen"){
        document.getElementById('result').innerHTML = (x*(200/Math.PI));
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    //cen
    else if(selectValue1 == "cen" &&  selectValue2 == "sexa"){
        document.getElementById('result').innerHTML = (x*(180/200));
        document.getElementById('unit').innerHTML = "°";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "cen" &&  selectValue2 == "rad"){
        document.getElementById('result').innerHTML = (x*(Math.PI/200));
        document.getElementById('unit').innerHTML = "π";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "cen" &&  selectValue2 == "cen"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "g";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }

    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    }  
}

//Presion 
function presion(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;

    //Megapascal
    if(selectValue1 == "megapascal" &&  selectValue2 == "megapascal"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Mpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "megapascal" &&  selectValue2 == "kilopascal"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "Kpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "megapascal" &&  selectValue2 == "pascal"){
        document.getElementById('result').innerHTML = (x*1000000);
        document.getElementById('unit').innerHTML = "Pa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "megapascal" &&  selectValue2 == "bar"){
        document.getElementById('result').innerHTML = (x*10);
        document.getElementById('unit').innerHTML = "bar";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "megapascal" &&  selectValue2 == "atm"){
        document.getElementById('result').innerHTML = (x*9.86923);
        document.getElementById('unit').innerHTML = "atm";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    //Kilopascal
    else if(selectValue1 == "kilopascal" &&  selectValue2 == "megapascal"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "Mpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilopascal" &&  selectValue2 == "kilopascal"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Kpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilopascal" &&  selectValue2 == "pascal"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "Pa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilopascal" &&  selectValue2 == "bar"){
        document.getElementById('result').innerHTML = (x/100);
        document.getElementById('unit').innerHTML = "bar";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "kilopascal" &&  selectValue2 == "atm"){
        document.getElementById('result').innerHTML = (x*0.00986923);
        document.getElementById('unit').innerHTML = "atm";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    
    //Pascal
    else if(selectValue1 == "pascal" &&  selectValue2 == "megapascal"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "Mpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "pascal" &&  selectValue2 == "kilopascal"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "Kpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "pascal" &&  selectValue2 == "pascal"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Pa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "pascal" &&  selectValue2 == "bar"){
        document.getElementById('result').innerHTML = (x/100000);
        document.getElementById('unit').innerHTML = "bar";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "pascal" &&  selectValue2 == "atm"){
        document.getElementById('result').innerHTML = (x/101325);
        document.getElementById('unit').innerHTML = "atm";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    //bar
    else if(selectValue1 == "bar" &&  selectValue2 == "megapascal"){
        document.getElementById('result').innerHTML = (x/10);
        document.getElementById('unit').innerHTML = "Mpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "bar" &&  selectValue2 == "kilopascal"){
        document.getElementById('result').innerHTML = (x*100);
        document.getElementById('unit').innerHTML = "Kpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "bar" &&  selectValue2 == "pascal"){
        document.getElementById('result').innerHTML = (x*100000);
        document.getElementById('unit').innerHTML = "Pa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "bar" &&  selectValue2 == "bar"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "bar";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "bar" &&  selectValue2 == "atm"){
        document.getElementById('result').innerHTML = (x*0.986923);
        document.getElementById('unit').innerHTML = "atm";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }

    //atm
    else if(selectValue1 == "atm" &&  selectValue2 == "megapascal"){
        document.getElementById('result').innerHTML = (x/9.869);
        document.getElementById('unit').innerHTML = "Mpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "atm" &&  selectValue2 == "kilopascal"){
        document.getElementById('result').innerHTML = (x*101.325);
        document.getElementById('unit').innerHTML = "Kpa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "atm" &&  selectValue2 == "pascal"){
        document.getElementById('result').innerHTML = (x*101325);
        document.getElementById('unit').innerHTML = "Pa";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "atm" &&  selectValue2 == "bar"){
        document.getElementById('result').innerHTML = (x*1.01325);
        document.getElementById('unit').innerHTML = "bar";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1 == "atm" &&  selectValue2 == "atm"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "atm";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }

    /////
    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    } 
}

function volu(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;
    //Litro
    if (selectValue1=="litro" && selectValue2 =="litro"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Lt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="litro" && selectValue2 =="metro3"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "m³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="litro" && selectValue2 =="cm3"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "cm³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="litro" && selectValue2 =="mili"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "mLt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    
    
    //m3
    else if (selectValue1=="metro3" && selectValue2 =="litro"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "Lt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="metro3" && selectValue2 =="metro3"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "m³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="metro3"&& selectValue2 =="cm3"){
        document.getElementById('result').innerHTML = (x*1000000);
        document.getElementById('unit').innerHTML = "cm³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="metro3" && selectValue2 =="mili"){
        document.getElementById('result').innerHTML = (x*1000000);
        document.getElementById('unit').innerHTML = "mLt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }

    //cm3 
    else if (selectValue1=="cm3" && selectValue2 =="litro"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "Lt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="cm3" && selectValue2 =="metro3"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "m³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="cm3"&& selectValue2 =="cm3"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "cm³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="cm3" && selectValue2 =="mili"){
        document.getElementById('result').innerHTML = (x*1);
        document.getElementById('unit').innerHTML = "mLt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    // mili
    else if (selectValue1=="mili" && selectValue2 =="litro"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "Lt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="mili" && selectValue2 =="metro3"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "m³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="mili"&& selectValue2 =="cm3"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "cm³";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="mili" && selectValue2 =="mili"){
        document.getElementById('result').innerHTML = (x*1);
        document.getElementById('unit').innerHTML = "mLt";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    /////
    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    } 
}

function longi(){
    var x =parseFloat(document.getElementById('value1').value);
    var selectValue1 =document.getElementById('opcion1').value;
    var selectValue2 =document.getElementById('opcion2').value;
    // Kilometro
    if (selectValue1=="kilometro" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="25px";
        document.getElementById('unit').style.fontSize="25px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*100000);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*1000000);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x/1000000000);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x*0.621371);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*1093.61);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="21.5px";
        document.getElementById('unit').style.fontSize="21.5px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*3280.84);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    else if(selectValue1=="kilometro" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*39370.1);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    //metro
    else if (selectValue1=="metro" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23.5px";
        document.getElementById('unit').style.fontSize="23.5px";
    }
    else if(selectValue1=="metro" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1=="metro" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*100);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="metro" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="metro" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    else if(selectValue1=="metro" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x*0.000621371);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="metro" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*1.09361);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="metro" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*3.28084);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="metro" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*39.3701);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    //centimetro
    else if (selectValue1=="cm" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x/100000);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="cm" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x/100);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="cm" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1=="cm" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*10);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="cm" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*10000);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="21px";
        document.getElementById('unit').style.fontSize="21px";
    }
    else if(selectValue1=="cm" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x/160934);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="cm" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*0.0109361);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="cm" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*0.0328084);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="cm" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*0.393701);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    //milimetros
    else if (selectValue1=="milimetro" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x/10);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*1000);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x/(1.609*(10**6)));
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*0.00109361);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*0.00328084);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milimetro" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*0.0393701);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    //Micrometro
    else if (selectValue1=="micrometro" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x/1000000000);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x/1000000);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x/10000);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="24px";
        document.getElementById('unit').style.fontSize="24px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x/1000);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x/(1.609*(10**9)));
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*0.00000109361);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*0.00000328084);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="micrometro" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*0.0000393701);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }

    //Millas 
    else if (selectValue1=="milla" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x*1.60934);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milla" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x*1609.34);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milla" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*160934);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milla" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*(1.609344*(10**6)));
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milla" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*(1.609344*(10**9)));
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milla" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="milla" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x*1760);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milla" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*5280);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="milla" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*63360);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }

    //Yarda
    else if (selectValue1=="yarda" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x*0.0009144);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x*0.9144);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*91.44);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*914.4);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*914400);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x*0.000568182);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x*3);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="yarda" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*36);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
 //Pie
    else if (selectValue1=="pie" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x*0.0003048);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pie" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x*0.3048);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pie" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*30.48);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pie" && selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*304.8);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pie" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*304800);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pie" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x/5280);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pie" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x/3);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pie"&& selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pie" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x*12);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }

    //Pulgada

    else if (selectValue1=="pulgada" && selectValue2 =="kilometro"){
        document.getElementById('result').innerHTML = (x/39370);
        document.getElementById('unit').innerHTML = "Km";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="metro"){
        document.getElementById('result').innerHTML = (x/39.37);
        document.getElementById('unit').innerHTML = "m";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="cm"){
        document.getElementById('result').innerHTML = (x*2.54);
        document.getElementById('unit').innerHTML = "cm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pulgada"&& selectValue2 =="milimetro"){
        document.getElementById('result').innerHTML = (x*25.4);
        document.getElementById('unit').innerHTML = "mm";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="micrometro"){
        document.getElementById('result').innerHTML = (x*25400);
        document.getElementById('unit').innerHTML = "um";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="milla"){
        document.getElementById('result').innerHTML = (x/63360);
        document.getElementById('unit').innerHTML = "mi";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="yarda"){
        document.getElementById('result').innerHTML = (x/36);
        document.getElementById('unit').innerHTML = "yd";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="pie"){
        document.getElementById('result').innerHTML = (x/12);
        document.getElementById('unit').innerHTML = "pies";
        document.getElementById('result').style.fontSize="23px";
        document.getElementById('unit').style.fontSize="23px";
    }
    else if(selectValue1=="pulgada" && selectValue2 =="pulgada"){
        document.getElementById('result').innerHTML = (x);
        document.getElementById('unit').innerHTML = "pulg.";
        document.getElementById('result').style.fontSize="22px";
        document.getElementById('unit').style.fontSize="22px";
    }
    /////
    else{
        document.getElementById('result').innerHTML = "NaN";
        document.getElementById('unit').innerHTML = "";
        document.getElementById('result').style.fontSize="28px";
        document.getElementById('unit').style.fontSize="28px";
    } 
}