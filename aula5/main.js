
function mostrar() {
    var nome = prompt("qual é o seu nome", "escreve aqui o nome");


    // alert("WELCOME" + " " + nome);

    // var inputvalue = document.getElementById("ipt1").value;
    // document.getElementById("result").innerHTML=inputvalue;

    // alert("li:", imput1);

    // document.getElementById("but").style.setProperty= const name = new type("des");

};

function mosdes() {
    var inputvalue = document.getElementById("ipt1").value;
    document.getElementById("result").innerHTML = inputvalue


    document.getElementById("but").style.display = "none";
    document.getElementById("ipt1").style.display = "none";
    document.getElementById("label").style.display = "none";
    var x = document.getElementsByTagName("div");
    x[0].style.backgroundColor = "red";
    x[1].style.backgroundColor = "yellow";
    x[2].style.backgroundColor = "yellow";
}

// function conta() {
    
// var espaco = document.getElementById("inp").value.length;
// document.getElementById("numero").innerHTML=espaco;

// }
function conta() {
var sectionToCheck  = document.getElementById("inp").value.trim();
console.log(typeof sectionToCheck);
var allFound = sectionToCheck.split(" ").length;
console.log(allFound)
document.getElementById("numero").innerHTML=allFound-1;


}