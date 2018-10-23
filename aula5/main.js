
// function mostrar() {
//     var nome = prompt("qual é o seu nome", "escreve aqui o nome");
// }

// function mosdes() {
//     var inputvalue = document.getElementById("ipt1").value;
//     document.getElementById("result").innerHTML = inputvalue


//     document.getElementById("but").style.display = "none";
//     document.getElementById("ipt1").style.display = "none";
//     document.getElementById("label").style.display = "none";
//     var x = document.getElementsByTagName("div");
//     x[0].style.backgroundColor = "red";
//     x[1].style.backgroundColor = "yellow";
//     x[2].style.backgroundColor = "yellow";
// }

// function conta() {
//     var sectionToCheck = document.getElementById("inp").value.trim();
//     console.log(typeof sectionToCheck);
//     var allFound = sectionToCheck.split(" ").length;
//     console.log(allFound)
//     document.getElementById("numero").innerHTML = allFound - 1;


// }
// function conta1() {
//     var sectionToCheck1 = document.getElementById("inp1").value.trim();
//     console.log(typeof sectionToCheck1);
//     var allFound1 = sectionToCheck1.split(" ").length;
//     console.log(allFound1)
//     document.getElementById("n1").innerHTML = allFound1 - 1;
// }


// function conta2() {
//     var sectionToCheck2 = document.getElementById("inp2").value.trim();
//     console.log(typeof sectionToCheck2);
//     var allFound2 = sectionToCheck2.split(" ").length;
//     console.log(allFound2)
//     document.getElementById("n2").innerHTML = allFound2 - 1;
// }
// function contaesp(frase) {
//     var numEspaaco = 0;



//     for (let index = 0; index < frase.length; index++) {
//         console.log('index contaesp : '+index);
//         if(frase[index] == ' ') {
//             console.log('Buuu');
//             numEspaaco +=1;
//             // numEspaaco++;
//         };
//     }


//     return numEspaaco

// }


// function main() {
//     var str1 = document.getElementById("n1").value;
//     var str2 = document.getElementById("n2").value;
//     // var stri1 = contaesp(str1);
//     // var stri2 = contaesp(str2);
//     document.getElementById("r1").innerHTML = contaesp(str1);
//     document.getElementById("r2").innerHTML = contaesp(str2);
// }


function input() {

    var inp = document.getElementById('a').innerHTML;

    var str = inp.toString;
    return str
}
function ordena(str) {

    for (let index = 0; index < str.length; index++) {
        if (str[index] > str[index + 1]) {
            str[index] = str[index + 1], str[index + 1] = str[index]
        };

    }
    return str
    document.getElementById('c').innerHTML = str
}