function bt() {
    document.getElementById("hi").style.fontWeight="bold" ;}  
function gt()
{ document.getElementById('hi').style.color= prompt("Which color would you choose for the paragraph?");} 
function dl()
{ document.getElementById('hi').innerHTML= prompt("Write something :");}
function cb()
{ var result= prompt("Wanna Delete");
if (result=="yes"){
   document.getElementById('hi').style.display ="none";
   alert("deleted");}
else 
{document.getElementById("hi").style.display ="";
alert("cancelled");}}

texte= new Array ();
texte[0] = "Bienvenue à Berlin";
texte[1] = "willkommen in Berlin ";
texte[2] = "marahbe";
texte[3] = "zaretna el Barka";
nb=-1;
function change()
 {if
     (nb==texte.length-1) {nb=0;}
else {nb++;} document.getElementById("change").innerHTML=texte[nb];}
setInterval("change()",1000);

function changeImage()
{ document.getElementById("im").style.display ="none";}

