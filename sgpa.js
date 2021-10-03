var a;
var a1=0;
var b;
var b1=0;
var c;
var c1=0;
var d;
var d1=0;
var e;
var e1=0;
var f;
var f1=0;
var result=0;
var SGPA=0;
function Calculate()
{
    a=parseInt(form1.textNum1.value);
    b=parseInt(form1.textNum2.value);
    c=parseInt(form1.textNum3.value);
    d=parseInt(form1.textNum4.value);
    e=parseInt(form1.textNum5.value);
    f=parseInt(form1.textNum6.value);
    a1=a*10;
    b1=b*10;
    c1=c*10;
    d1=d*10;
    e1=e*10;
    f1=f*10;
    result=a1+b1+c1+d1+e1+f1;
    SGPA=result/60;
    document.getElementById("SGPA : ").innerHTML="SGPA : " + SGPA;
    
//document.write("The total grade points:" +"<b>" + result +"<br>" +"</br>");
//document.write("The SGPA is:" +"<b>" + SGPA +"<br>" +"</br>");
}

