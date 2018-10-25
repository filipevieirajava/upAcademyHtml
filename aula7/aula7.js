// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready !");

//     $('#target').click(function () {
//         $('h1').css("color","red ");
//         $("imagem").html(getimage("https://hunyadi.info.hu/levente/images/stories/boxplus/image3.jpg","ola"));

//     });
    
//     function getimage(srcimage,altimage){

//         return `<img src="${srcimage}" alt="${altimage}">`
        
    });
    

// function name() {
    

// var inputs = []
// inputs.push($("aluno").val())
// return inputs
// console.log(name())
// }
function gettamanho() {

   var a= document.getElementById("nome").value;
   var b= parseInt(a);
   console.log(a);
    return b
   
}

function alunos(num) {

    var num= [1];
  
    for (i = 1; i < gettamanho(); i++) {
        num.push(i+1) ;
        console.log(num);
       
    }
    // return num
    document.getElementById("esc").innerHTML=num;
    //  document.getElementById("esc").innerHTML=num;
}


