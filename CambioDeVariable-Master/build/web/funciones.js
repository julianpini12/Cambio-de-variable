var constante1=0;
var constante2=0;
var auxiliar1=0;
var auxiliar2=0;
function ecuacionRemplazar(){
    var numA = document.getElementById("A").value;
    var numB= document.getElementById("B").value;
    var numA2;
    var numB2;
    
    var tipo = document.getElementsByName("ecuacion");
    if(tipo[0].checked){
    forma1(numA,numB,numA2,numB2);
    
    }
    if(tipo[1].checked){
    forma2(numA,numB,numA2,numB2);    
    }
}
function forma1(numA,numB,numA2,numB2){
    var indiceFn=1;
    var indiceFn2;
    var condicion1 =1;
    var condicion2 = parseFloat(numA) +parseFloat(numB);
    var AyB = document.getElementById("numerosAsignados");
    var solu = "Solucion Paso a Paso <br><br> Fn = " + numA + "+ "+numB +"*F<sub>n/2</sub>";
    solu += " <br> <br> Considerando que: n= 2<sup>i</sup>";
   
    solu += " <br> <br> "+indiceFn+"F<sub>2<sup>i</sup></sub> + ("+(numB*(-1))+"*F<sub>2<sup>i-1</sup></sub>) = "+numA ;
    solu += " <br> <br> Cambiando los subindices en funcion i:";
    solu += " <br> <br>"+indiceFn+" F<sub>i</sub> + ("+(numB*(-1))+"*F<sub>i-1</sub>) = "+numA ;
    solu += "<br> <br> Remplazandoi por i-1 y  Multiplicando por (-1)  se obtiene: " ;
    numA2 = numA*(-1);
    numB2 = numB*(-1);
    indiceFn2 = indiceFn*(-1);
    solu += " <br> <br>"+indiceFn2+" F<sub>i-1</sub> + ("+(numB2*(-1))+"*F<sub>i-2</sub>) = "+numA2 ;
    solu += "<br> <br> Sumando las ecuaciones para obtener la homogenea:" ;
    var b= (numB*(-1))+indiceFn2;
    var c= numB2*(-1);
    solu += " <br> <br>"+indiceFn+" F<sub>i</sub> + ("+b+"*F<sub>i-1</sub>)+ ("+c+"*F<sub>i-2</sub>) = 0" ;
    raiz = new Array(2);
    raiz[0] = (-b + Math.sqrt((Math.pow(b, 2)) - (4 * indiceFn * c))) / (2 * indiceFn);
    raiz[1] = (-b - Math.sqrt((Math.pow(b, 2)) - (4 * indiceFn * c))) / (2 * indiceFn);
    solu += "<br> <br> Las dos raices son ("+ raiz[0]+","+raiz[1]+")"  ;
    if(raiz[0]===raiz[1]){
    solu += "<br> <br> La solucion General es:" ;
    solu += "<br> ** Se presenta Multiplicidad** <br> F(i) =  C1*" +  raiz[0]+"<sup>i</sup> + i*C2*" + raiz[1]+"<sup>i</sup>";
    solu += "<br> <br> Remplazando i por lg(n)" ;
    solu += "<br> <br> F(n) =  C1*" +  raiz[0]+"<sup>lg(n)</sup> + lg(n)*C2*" + raiz[1]+"<sup>lg(n)</sup>";
    solu += "<br> <br> Las condiciones iniciales se calculan con: " ;
    
    solu += "<br> Fn = " + numA + "+ "+numB +"*F<sub>n/2</sub>";
  
    solu += "<br> <br> F(1) = "+ condicion1 ;
    solu += "<br> <br> F(2) = "+ condicion2 ;
    solu += "<br> <br> Las ecuaciones para calcular C1 y C2 son:" ;
    solu += "<br> <br>   C1*1 <sup>lg("+  raiz[0]+")</sup> + C2*lg(1)*1<sup>lg(" + raiz[1]+")</sup> = "+ condicion1;
    solu += "<br>  C1*2 <sup>lg("+  raiz[0]+")</sup> + C2*lg(2)*2<sup>lg(" + raiz[1]+")</sup> = "+ condicion2;
    solu += "<br> <br>   C1*"+  raiz[1]+" + C2*lg(1)*" + raiz[1]+" = "+ condicion1;
    solu += "<br>  C1*"+  raiz[0]+" + C2*lg(2)*" + raiz[1]+" = "+ condicion2;
    solu += "<br> <br> Matriz para Gauss" ;
    auxiliar1 = Math.log2(1);
    auxiliar2 = Math.log2(2);
    
    solu += "<table border = \"1\"><tr><td>"+raiz[1]+"</td><td>"+auxiliar1+"</td><td>"+condicion1+"</td></tr><tr><td>"+raiz[0]+"</td><td>"+auxiliar2+"</td><td>"+condicion2+"</td></tr> </table>";
   
    Gauss(raiz[1],auxiliar1,condicion1,raiz[0],auxiliar2,condicion2);
    solu += "<br> <br> Donde C1 y C2 son:" ;
    solu += "<br> C1 = " + constante1 ;
    solu += "<br> C2 = " + constante2 ;
    solu += "<br><br> La solucion es: ";
    solu += "<br>F(n) = " + (parseFloat(constante1)*parseFloat(Math.pow(raiz[0],Math.log2(raiz[1]))))+ "+("+constante2+")* lg(n)";
    
    }
    else{
    solu += "<br> <br> La solucion General es:" ;
    solu += "<br> <br> F(i) =  C1*" +  raiz[0]+"<sup>i</sup> + C2*" + raiz[1]+"<sup>i</sup>";
    solu += "<br> <br> Remplazando i por lg(n)" ;
    solu += "<br> <br> F(n) =  C1*" +  raiz[0]+"<sup>lg(n)</sup> + C2*" + raiz[1]+"<sup>lg(n)</sup>";
    solu += "<br> <br> Las condiciones iniciales se calculan con: " ;
    
    solu += "<br> Fn = " + numA + "+ "+numB +"*F<sub>n/2</sub>";
  
    solu += "<br> <br> F(1) = "+ condicion1 ;
    solu += "<br> <br> F(2) = "+ condicion2 ;
    solu += "<br> <br> Las ecuaciones para calcular C1 y C2 son:" ;
    solu += "<br> <br>   C1*1 <sup>lg("+  raiz[0]+")</sup> + C2*1<sup>lg(" + raiz[1]+")</sup> = "+ condicion1;
    solu += "<br>  C1*2 <sup>lg("+  raiz[0]+")</sup> + C2*2<sup>lg(" + raiz[1]+")</sup> = "+ condicion2;
    solu += "<br> <br>   C1*"+  raiz[1]+" + C2* " + raiz[1]+" = "+ condicion1;
    solu += "<br>  C1*"+  raiz[0]+" + C2*" + raiz[1]+" = "+ condicion2;
    
    solu += "<br> <br> Matriz para Gauss" ;
    solu += "<table border = \"1\"><tr><td>"+raiz[1]+"</td><td>"+raiz[1]+"</td><td>"+condicion1+"</td></tr><tr><td>"+raiz[0]+"</td><td>"+raiz[1]+"</td><td>"+condicion2+"</td></tr> </table>";
    Gauss(raiz[1],raiz[1],condicion1,raiz[0],raiz[1],condicion2);
    solu += "<br> <br> Donde C1 y C2 son:" ;
    solu += "<br> C1 = " + constante1 ;
    solu += "<br> C2 = " + constante2 ;
    solu += "<br><br> La solucion es: ";
    solu += "<br>F(n) = " + (parseFloat(constante1)*parseFloat(Math.pow(raiz[0],Math.log2(raiz[1]))))+ "* n <sup>"+(parseFloat(Math.log2(raiz[0]))) +"</sup>+("+constante2+")";
    
            
    }
    AyB.innerHTML= solu;
}
function forma2(numA,numB,numA2,numB2){
    var indiceFn=1;
    var indiceFn2;
    var condicion1 =1;
    var condicion2 = parseFloat(numB) +Math.pow(2,numA);
    var AyB = document.getElementById("numerosAsignados");
    var solu = "Solucion Paso a Paso <br><br> Fn = n<sup>" + numA + "</sup>+ "+numB +"*F<sub>n/2</sub>";
    solu += " <br> <br> Considerando que: n= 2<sup>i</sup>";
   
    solu += " <br> <br> "+indiceFn+"F<sub>2<sup>i</sup></sub> + ("+(numB*(-1))+"*F<sub>2<sup>i-1</sup></sub>) = ("+indiceFn+")2<sup>"+numA+"i</sup>" ;
    solu += " <br> <br> Cambiando los subindices en funcion i:";
    solu += " <br> <br>"+indiceFn+" F<sub>i</sub> + ("+(numB*(-1))+"*F<sub>i-1</sub>) = ("+indiceFn+")2<sup>"+numA+"i</sup>" ;
    solu += "<br> <br> Remplazandoi por i-1 y  Multiplicando por (-1)  se obtiene: " ;
    numA2 = Math.pow(2,numA);
    numB2 = numB*(-1);
    indiceFn2 = indiceFn*(-1);
    solu += " <br> <br>"+indiceFn2+" F<sub>i-1</sub> + ("+(numB2*(-1))+"*F<sub>i-2</sub>) = ("+indiceFn2+")2<sup>"+numA+"i</sup>/"+numA2;
    solu += " <br> "+indiceFn2*numA2+" F<sub>i-1</sub> + ("+(numB2*(-1))*numA2+"*F<sub>i-2</sub>) = ("+indiceFn2+")2<sup>"+numA+"i</sup>";
    solu += "<br> <br> Sumando las ecuaciones para obtener la homogenea:" ;
    var b= (numB*(-1))+(indiceFn2*numA2);
    var c= numB2*(-1)*numA2;
    solu += " <br> <br>"+indiceFn+" F<sub>i</sub> + ("+b+"*F<sub>i-1</sub>)+ ("+c+"*F<sub>i-2</sub>) = 0" ;
    raiz = new Array(2);
    raiz[0] = (-b + Math.sqrt((Math.pow(b, 2)) - (4 * indiceFn * c))) / (2 * indiceFn);
    raiz[1] = (-b - Math.sqrt((Math.pow(b, 2)) - (4 * indiceFn * c))) / (2 * indiceFn);
    solu += "<br> <br> Las dos raices son ("+ raiz[0]+","+raiz[1]+")"  ;
    if(raiz[0]===raiz[1]){
    solu += "<br> <br> La solucion General es:" ;
    solu += "<br> ** Se presenta Multiplicidad** <br> F(i) =  C1*" +  raiz[0]+"<sup>i</sup> + i*C2*" + raiz[1]+"<sup>i</sup>";
    solu += "<br> <br> Remplazando i por lg(n)" ;
    solu += "<br> <br> F(n) =  C1*" +  raiz[0]+"<sup>lg(n)</sup> + lg(n)*C2*" + raiz[1]+"<sup>lg(n)</sup>";
    solu += "<br> <br> Las condiciones iniciales se calculan con: " ;
    
    solu += "<br> Fn = " + numA + "+ "+numB +"*F<sub>n/2</sub>";
  
    solu += "<br> <br> F(1) = "+ condicion1 ;
    solu += "<br> <br> F(2) = "+ condicion2 ;
    solu += "<br> <br> Las ecuaciones para calcular C1 y C2 son:" ;
    solu += "<br> <br>   C1*1 <sup>lg("+  raiz[0]+")</sup> + C2*lg(1)*1<sup>lg(" + raiz[1]+")</sup> = "+ condicion1;
    solu += "<br>  C1*2 <sup>lg("+  raiz[0]+")</sup> + C2*lg(2)*2<sup>lg(" + raiz[1]+")</sup> = "+ condicion2;
    solu += "<br> <br>   C1*"+  raiz[1]+" + C2*lg(1)*" + raiz[1]+" = "+ condicion1;
    solu += "<br>  C1*"+  raiz[0]+" + C2*lg(2)*" + raiz[1]+" = "+ condicion2;
    solu += "<br> <br> Matriz para Gauss" ;
    auxiliar1 = Math.log2(1);
    auxiliar2 = Math.log2(2)*raiz[1];
    
    solu += "<table border = \"1\"><tr><td>"+indiceFn+"</td><td>"+auxiliar1+"</td><td>"+condicion1+"</td></tr><tr><td>"+raiz[0]+"</td><td>"+auxiliar2+"</td><td>"+condicion2+"</td></tr> </table>";
    
   
    Gauss(indiceFn,auxiliar1,condicion1,raiz[0],auxiliar2,condicion2);
    solu += "<br> <br> Donde C1 y C2 son:" ;
    solu += "<br> C1 = " + constante1 ;
    solu += "<br> C2 = " + constante2 ;
    solu += "<br><br> La solucion es: ";
    solu += "<br>F(n) = 1*n<sup>"+numA+"</sup>+1*lg(n)*n<sup>"+numA+"</sup>";
    
    }
    else{
    solu += "<br> <br> La solucion General es:" ;
    solu += "<br> <br> F(i) =  C1*" +  raiz[0]+"<sup>i</sup> + C2*" + raiz[1]+"<sup>i</sup>";
    solu += "<br> <br> Remplazando i por lg(n)" ;
    solu += "<br> <br> F(n) =  C1*" +  raiz[0]+"<sup>lg(n)</sup> + C2*" + raiz[1]+"<sup>lg(n)</sup>";
    solu += "<br> <br> Las condiciones iniciales se calculan con: " ;
    
    solu += "<br> Fn = n<sup>" + numA + "</sup>+ "+numB +"*F<sub>n/2</sub>"
  
    solu += "<br> <br> F(1) = "+ condicion1 ;
    solu += "<br> <br> F(2) = "+ condicion2 ;
    solu += "<br> <br> Las ecuaciones para calcular C1 y C2 son:" ;
    solu += "<br> <br>   C1*1 <sup>lg("+  raiz[0]+")</sup> + C2*1<sup>lg(" + raiz[1]+")</sup> = "+ condicion1;
    solu += "<br>  C1*2 <sup>lg("+  raiz[0]+")</sup> + C2*2<sup>lg(" + raiz[1]+")</sup> = "+ condicion2;
    solu += "<br> <br>   C1*"+ indiceFn+" + C2* " + indiceFn+" = "+ condicion1;
    solu += "<br>  C1*"+  raiz[0]+" + C2*" + raiz[1]+" = "+ condicion2;
    
    solu += "<br> <br> Matriz para Gauss" ;
    solu += "<table border = \"1\"><tr><td>"+indiceFn+"</td><td>"+indiceFn+"</td><td>"+condicion1+"</td></tr><tr><td>"+raiz[0]+"</td><td>"+raiz[1]+"</td><td>"+condicion2+"</td></tr> </table>";
    Gauss(indiceFn,indiceFn,condicion1,raiz[0],raiz[1],condicion2);
    solu += "<br> <br> Donde C1 y C2 son:" ;
    solu += "<br> C1 = " + constante1 ;
    solu += "<br> C2 = " + constante2 ;
    solu += "<br><br> La solucion es : ";
    solu += "<br>F(n) = " + (parseFloat(constante1)*parseFloat(Math.pow(raiz[0],Math.log2(indiceFn))))+ "* n <sup>"+(parseFloat(Math.log2(raiz[0]))) +"</sup>+("+constante2+")* n <sup>"+(parseFloat(Math.log2(raiz[1])));
    
            
    }
    AyB.innerHTML= solu;
}
function Gauss(n1, n2,n3,n4,n5,n6) {
    var nAp1;
    var nAp2;
    var nAp3;
	if(n1 != 1){
          
            if(n1 <0){
          
            n2 = n2/n1 ;
            n3 = n3/n1;
            n1= n1/n1 ;
            }
            else{
            
            n2 = n2/n1;
            n3 = n3/n1;
            n1= n1/n1;
            }
            
        }
        if(n4 !=0){
            
            
            nAp1 = n4*n1;
            nAp2 = n4*n2;
            nAp3 = n4*n3;
            
            n4 = n4 - nAp1;
            n5 = n5 - nAp2;
            n6 = n6 - nAp3;
         }
         if(n5 != 1){
              
            if(n5 <0){
                
           
            n4= (parseFloat(n4)/parseFloat(n5)) ;
            n6 = (parseFloat(n6)/parseFloat(n5)) ;
            n5 = (parseFloat(n5)/parseFloat(n5));
           
            
            
            }
           
            else{
                 
            n4= n4/n5;
            n6 = n6/n5;
            n5 = n5/n5;
           
           
            }
           
            
        }
        constante2 = n6;
        
        constante1 = n3 - (n2 * constante2);
}



